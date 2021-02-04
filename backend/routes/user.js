const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkToken = require("../utils/");
const sgMail = require("@sendgrid/mail");
const auth = require("../middleware/auth");
const crypto = require("crypto");
const async = require("async");
const jwtSecret = process.env.jwtSecret;
const BCRYPT_SALT_ROUNDS = 12;
const gravatar = require('gravatar');

require("dotenv").config();

sgMail.setApiKey(process.env.sendGridApiKey);

router.get("/reset", (req, res, next) => {
  User.findOne({
    resetPasswordToken: req.query.resetPasswordToken,
    resetPasswordExpires: {
      $gt: Date.now(),
    },
  }).then((user) => {
    if (user === null) {
      console.log("password reset link is expired or invalid");
      res.json("password reset link is invalid or has expired");
    } else {
      res.status(200).send({
        email: user.email,
        message: "password reset link is okay",
      });
    }
  });
});


router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    const avatar = gravatar.url(email, {
    //   s: '200',
    //   r: 'pg',
    //   d: 'mm'
    // })

    s: '200', r: 'pg', d: '404'});

    user = new User({
      name,
      email,
      avatar,
      password,
      role,
    });
    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.role = "FAN";
    await user.save();
    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token: token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token: token });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ errors: [{ msg: "Error with email" }] });
  }
});

router.get("/:UserId", (req, res, next) => {
  const id = req.params.UserId;
  User.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No Entry found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:UserId", (req, res, next) => {
  const id = req.params.UserId;
  User.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/:UserId", (req, res, next) => {
  const id = req.params.UserId;

  User.update({ _id: id }, { $set: req.body })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/forgotPassword", function (req, res) {
  async.waterfall(
    [
      function (done) {
        User.findOne({
          email: req.body.email,
        }).exec(function (err, user) {
          if (user) {
            done(err, user);
          } else if (user === null) {
            res.status(200).json("Email not found");
          }
        });
      },

      function (user, done) {
        // create the random token
        crypto.randomBytes(20, function (err, buffer) {
          var token = buffer.toString("hex");
          done(err, user, token);
        });
      },
      function (user, token, done) {
        User.findByIdAndUpdate(
          { _id: user._id },
          {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000,
          },
          { upsert: true, new: true }
        ).exec(function (err, new_user) {
          done(err, token, new_user);
        });
      },
      function (token, user, done) {
        const emailNotify = () => {
          const msg = {
            to: `${user.email}`,
            from: "lumi@sparkplugcode.com",
            subject: "Password Reset Request",
            text: "please fill this form by clicking this link",
            html: `
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  @media screen and (max-width: 720px) {
    body .c-v84rpm {
      width: 100% !important;
      max-width: 720px !important;
    }
    body .c-v84rpm .c-7bgiy1 .c-1c86scm {
      display: none !important;
    }
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-pekv9n .c-1qv5bbj,
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-1c9o9ex .c-1qv5bbj,
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-90qmnj .c-1qv5bbj {
      border-width: 1px 0 0 !important;
    }
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-183lp8j .c-1qv5bbj {
      border-width: 1px 0 !important;
    }
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-pekv9n .c-1qv5bbj {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-1c9o9ex .c-1qv5bbj,
    body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-90qmnj .c-1qv5bbj {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    body .c-v84rpm .c-ry4gth .c-1dhsbqv {
      display: none !important;
    }
  }


  @media screen and (max-width: 720px) {
    body .c-v84rpm .c-ry4gth .c-1vld4cz {
      padding-bottom: 10px !important;
    }
  }
</style>
<title>Recover your Crisp password</title>
</head>

<body style="margin: 0; padding: 0; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-stretch: normal; font-size: 14px; letter-spacing: .35px; background: #1a508b; color: #333333;">
<table border="1" cellpadding="0" cellspacing="0" align="center" class="c-v84rpm" style="border: 0 none; border-collapse: separate; width: 720px;" width="720">
  <tbody>
    <tr class="c-1syf3pb" style="border: 0 none; border-collapse: separate; height: 114px;">
      <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">
        <table align="center" border="1" cellpadding="0" cellspacing="0" class="c-f1bud4" style="border: 0 none; border-collapse: separate;">
          <tbody>
            <tr align="center" class="c-1p7a68j" style="border: 0 none; border-collapse: separate; padding: 16px 0 15px;">
              <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><img alt="" src="https://res.cloudinary.com/unitix/image/upload/v1610617955/splitsheet_logo_df8pkd.png" class="c-1shuxio" style="border: 0 none; line-height: 100%; outline: none; text-decoration: none; height: 33px; width: 120px;" width="120" height="33"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr class="c-7bgiy1" style="border: 0 none; border-collapse: separate; -webkit-box-shadow: 0 3px 5px rgba(0,0,0,0.04); -moz-box-shadow: 0 3px 5px rgba(0,0,0,0.04); box-shadow: 0 3px 5px rgba(0,0,0,0.04);">
      <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">
        <table align="center" border="1" cellpadding="0" cellspacing="0" class="c-f1bud4" style="border: 0 none; border-collapse: separate; width: 100%;" width="100%">
          <tbody>
            <tr class="c-pekv9n" style="border: 0 none; border-collapse: separate; text-align: center;" align="center">
              <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">
                <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-1qv5bbj" style="border: 0 none; border-collapse: separate; border-color: #E3E3E3; border-style: solid; width: 100%; border-width: 1px 1px 0; background: #FBFCFC; padding: 40px 54px 42px;">
                  <tbody>
                    <tr style="border: 0 none; border-collapse: separate;">
                      <td class="c-1m9emfx c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; color: #1D2531; font-size: 25.45455px;"
                        valign="middle">${user.name}, recover your password.</td>
                    </tr>
                    <tr style="border: 0 none; border-collapse: separate;">
                      <td class="c-46vhq4 c-4w6eli" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; color: #7F8FA4; font-size: 15.45455px; padding-top: 20px;"
                        valign="middle">Looks like you lost your password?</td>
                    </tr>
                    <tr style="border: 0 none; border-collapse: separate;">
                      <td class="c-eitm3s c-16v5f34" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; padding-top: 12px;"
                        valign="middle">We’re here to help. Click on the button below to change your password.</td>
                    </tr>
                    <tr style="border: 0 none; border-collapse: separate;">
                      <td class="c-rdekwa" style="border: 0 none; border-collapse: separate; vertical-align: middle; padding-top: 38px;" valign="middle"><a href="https://splitsheet.herokuapp.com/${token}" target="_blank"
                          class="c-1eb43lc c-1sypu9p c-16v5f34" style="color: #000000; -webkit-border-radius: 4px; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; line-height: 15px; display: inline-block; letter-spacing: .7px; text-decoration: none; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background-color: #1a508b; background-image: url(&quot;https://mail.crisp.chat/images/linear-gradient(-1deg,#137ECE2%,#288BD598%)&quot; );color: #ffffff; padding: 12px 24px;">Recover my password</a></td>
                    </tr>
                    <tr style="border: 0 none; border-collapse: separate;">
                      <td class="c-ryskht c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-size: 12.72727px; font-style: italic; padding-top: 52px;"
                        valign="middle">If you didn’t ask to recover your password, please ignore this email.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
             </tbody>

             </table>
             </body>`,
          };
          sgMail
            .send(msg)
            .then((response) => {
              res.status(200).json("recovery email sent");
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        };

        emailNotify();
      },
    ],
    function (err) {
      return res.status(422).json({ message: err });
    }
  );
});

router.put("/updatePassword", (req, res, next) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user !== null) {
      console.log("user exists in the db");
      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then((hashedPassword) => {
          User.findOneAndUpdate(
            { _id: user._id },
            {
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            }
          ).then(() => {
            console.log("password updated");

            res.status(200).send({ message: "password updated" });
          });
        });
    } else {
      console.log("no user exists in db to update");
      res.status(404).json("no user exists in db to update");
    }
  });
});

router.post("/google/login", async (req, res) => {
  const { email, name } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name,
        email,
      });

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token: token });
      });

      user.save();
    } else if (user) {
      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token: token });
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("user", ["_id", "name"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
