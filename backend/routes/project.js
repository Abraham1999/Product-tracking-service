const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Project = require("../models/package");
const Collaborator = require("../models/collaborator");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.sendGridApiKey);
const moment = require("moment");
const StaticDescription = `{"blocks":[{"key":"5ivud","text":"Welcome to Splitsheet ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;

const StaticHtml =
  "<p><strong>CO-PUBLISHER SPLITSHEET AGREEMENT</strong></p><p><strong>THIS AGREEMENT</strong> made effective  &quot;Insert Date&quot;</p><p></p>";

//@route POST /project
//description: create a Project
//access : Private

router.post("/", auth, async (req, res) => {
  try {
    let collaboratorName = [];

    const project = new Project({
      name: req.body.name,
      user: req.user.id,
      description: StaticDescription,
      descriptionToHTML: StaticHtml,
      recordingTitle: req.body.recordingTitle,
      recordingArtist: req.body.recordingArtist,
      stateOfLaw: req.body.stateOfLaw,
    });

    req.body.collaborators.map(async (item) => {
      let collaborator = new Collaborator({
        name: item.name,
        email: item.email,
        role: item.role,
        mobileNo: item.mobileNo,
      });

      collaboratorName.push(item.name);
      collaborator = new Collaborator(collaborator);

      const collaborators = {
        split: item.split,
        collaboratorId: collaborator.id,
        name: item.name,
        email: item.email,
        role: item.role,
        mobileNo: item.mobileNo,
      };

      const emailNotify = () => {
        const msg = {
          to: item.email,
          from: process.env.userEmail,
          subject: `Please sign this splitsheet -> ${req.body.name}`,
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
                                  valign="middle">Hello, you have been added as a collaborator to this project -> ${req.body.name}</td>
                              </tr>

                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-eitm3s c-16v5f34" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; padding-top: 12px;"
                                  valign="middle">Click on the button below to view the project and sign.</td>
                              </tr>
                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-rdekwa" style="border: 0 none; border-collapse: separate; vertical-align: middle; padding-top: 38px;" valign="middle"><a href="https://splitsheet.herokuapp.com/${project._id}/${collaborator.id}" target="_blank"
                                    class="c-1eb43lc c-1sypu9p c-16v5f34" style="color: #000000; -webkit-border-radius: 4px; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; line-height: 15px; display: inline-block; letter-spacing: .7px; text-decoration: none; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background-color: #1a508b; background-image: url(&quot;https://mail.crisp.chat/images/linear-gradient(-1deg,#137ECE2%,#288BD598%)&quot; );color: #ffffff; padding: 12px 24px;">View Project</a></td>
                              </tr>
                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-ryskht c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-size: 12.72727px; font-style: italic; padding-top: 52px;"
                                  valign="middle">For more inquiries, please visit our website https://splitsheet.herokuapp.com/</td>
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
            console.log("successful");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      emailNotify();
      project.collaborators.unshift(collaborators);

      await collaborator.save();
    });

    project.description = `{"blocks":[{"key":"5ivud","text":"CO-PUBLISHER SPLITSHEET AGREEMENT","type":"header-four","depth":0,"inlineStyleRanges":[{"offset":0,"length":32,"style":"BOLD"}],"entityRanges":[],"data":{"text-align":"center"}},{"key":"29pgd","text":"THIS AGREEMENT made effective ${moment(
      project.createdAt
    ).format(
      "MMMM Do YYYY"
    )}","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"BOLD"},{"offset":29,"length":18,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"cdqh9","text":"WHEREAS ${collaboratorName.join(
      ", "
    )} agree to co-publish a composition entitled ${
      project.name
    } (the Composition).","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":86,"length":4,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"f6s7h","text":"THIS AGREEMENT WITNESSES that in consideration of the mutual covenants and agreements contained in this Agreement, the parties hereby agree as follows:","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":24,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"b815","text":"The parties agree to publish the composition as co-publishers, each to retain ownership in copyright and split as defined in the SPLIT DETAILS section of this agreement.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":129,"length":13,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"4rmib","text":"Payment of publishing receipts to the parties shall be the net amounts remaining after payment of writer royalties, copyright and usage registration costs, cost of printing, and all other reasonable expenses incurred with respect to publishing the Composition. Extraordinary expenses, including advertising, publicity, and promotional expenses, shall be incurred by either party without the written consent of the other party.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2bqtg","text":"The composition will be copyrighted jointly in the names of ${collaboratorName} and the Composition's joint ownership shall be for the life of the copyright and of any renewal terms anywhere throughout the world. Sheet music, folios, record labels, orchestrations, and all other printed material concerning the Composition shall bear the names of all publishers.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fajo1","text":"This Agreement contains the entire understanding of the parties hereto relating to the subject matter hereof and cannot be changed or terminated except by an instrument signed by all of the parties hereunder. The validity, interpretation, and legal effect of this Agreement shall be governed by the laws of the State of ${
      project.stateOfLaw
    } applicable to contracts wholly entered into and performed entirely within the State of ${
      project.stateOfLaw
    }.","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":320,"length":7,"style":"BOLD"},{"offset":415,"length":7,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}`;

    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/currentUserProjects", [auth], async (req, res) => {
  try {
    const projects = await Project.find({
      user: req.user.id,
    }).populate("user", ["name"]);

    if (!projects) {
      return res.status(400).json({ msg: "No project created" });
    }
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /project
//description: Get project by ID
//access : Private

router.get("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.json(project);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(500).send("Server Error");
  }
});

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    const project2 = await project.collaborators.map((item) => {
      const collaborator = Collaborator.find();

      collaborator.deleteMany({ _id: item.collaboratorId }, function (err) {
        console.log(err);
      });
    });

    if (!project) {
      return res.status(404).json({ msg: "Data not found" });
    }

    await project.remove();

    res.json({ msg: "Data removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(500).send("Server Error");
  }
});

router.post("/edit/:id", async (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (!project) res.status(404).send("Data not found");
    else {
      project.projectName = req.body.projectName;
      project.date = req.body.date;
      project.status = req.body.status;
      res.status(200).json({ msg: "Data updated", project });
      project.save();
    }
  });
});

router.post("/description/html/:id", async (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (!project) res.status(404).send("Data not found");
    else {
      project.descriptionToHTML = req.body.descriptionToHTML;

      res.status(200).json({ msg: "Data added", project });

      project.save();
    }
  });
});

router.post("/edit/description/:id", async (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (!project) res.status(404).send("Data not found");
    else {
      project.description = req.body.description;
      res.status(200).json({ msg: "Data updated", project });
      project.save();
    }
  });
});

router.get("/project/:id/:collaboratorId", async (req, res) => {
  const project = await Project.find({
    _id: req.params.id,
    "collaborators.collaboratorId": req.params.collaboratorId,
  });
  if (project) {
    return res.status(200).send(project);
  } else {
    res.status(500).send("No Project found");
  }
});

router.get("/:id/:collaboratorId", async (req, res) => {
  const project = await Project.find({
    _id: req.params.id,
  });
  if (project[0]) {
    const collaborator = project[0].collaborators.filter(
      (x) => x.collaboratorId == req.params.collaboratorId
    );
    return res.status(200).send(collaborator);
  } else {
    res.status(500).send("No Project found");
  }
});

router.post("/signature/:id/:collaboratorId", async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    "collaborators.collaboratorId": req.params.collaboratorId,
  });
  if (project) {
    const collaborator = project.collaborators.filter(
      (x) => x.collaboratorId == req.params.collaboratorId
    );
    collaborator[0].signature = req.body.signature;
    collaborator[0].signed = true;
  }

  project.save();
});

//@route DELETE /delete/:id/:collaboratorId
//description: this is going to delete a collaborator
//access : Private
router.delete("/delete/:id/:collaboratorId", auth, async (req, res) => {
  try {
    const project = await Project.find({ _id: req.params.id });
    const collaboratorModel = await Collaborator.findById(
      req.params.collaboratorId
    );
    await collaboratorModel.remove();

    //Pull out collaborator
    const collaborator = project[0].collaborators.find(
      (collaborator) =>
        collaborator.collaboratorId === req.params.collaboratorId
    );
    // Make sure collaborator exists
    if (!collaborator) {
      return res.status(404).json({ msg: "Collaborator does not exist" });
    }
    //check user
    if (project[0].user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "User not authorized to delete collaborator" });
    }

    //Get remove index
    const removeIndex = project[0].collaborators
      .map((collaborator) => collaborator.collaboratorId)
      .indexOf(req.params.collaboratorId);

    project[0].collaborators.splice(removeIndex, 1);

    await project[0].save();
    res.json(project[0].collaborators);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST /updateProject/:id
// description: Update project
//access : Private
router.post("/updateProject/:id", [auth], async (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (!project) res.status(404).send("Project not found");
    else {
      project.name = req.body.name;
      project.status = req.body.status;
      project.recordingTitle = req.body.recordingTitle;
      project.recordingArtist = req.body.recordingArtist;
      project.stateOfLaw = req.body.stateOfLaw;

      res.status(200).json({ msg: "Project updated", project });
      project.save();
    }
  });
});

router.post("/add-collaborator/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      res.status(404).send("Project not found");
    }

    req.body.collaborators.map(async (item) => {
      let collaborator = new Collaborator({
        name: item.name,
        email: item.email,
        role: item.role,
        mobileNo: item.mobileNo,
      });

      collaborator = new Collaborator(collaborator);

      const collaborators = {
        split: item.split,
        collaboratorId: collaborator.id,
        name: item.name,
        email: item.email,
        role: item.role,
        mobileNo: item.mobileNo,
      };

      const emailNotify = () => {
        const msg = {
          to: item.email,
          from: process.env.userEmail,
          subject: `Please sign this splitsheet -> ${req.body.name}`,
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
                                  valign="middle">Hello, you have been added as a collaborator to this project -> ${req.body.name}</td>
                              </tr>

                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-eitm3s c-16v5f34" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; padding-top: 12px;"
                                  valign="middle">Click on the button below to view the project and sign.</td>
                              </tr>
                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-rdekwa" style="border: 0 none; border-collapse: separate; vertical-align: middle; padding-top: 38px;" valign="middle"><a href="https://splitsheet.herokuapp.com/${project._id}/${collaborator.id}" target="_blank"
                                    class="c-1eb43lc c-1sypu9p c-16v5f34" style="color: #000000; -webkit-border-radius: 4px; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; line-height: 15px; display: inline-block; letter-spacing: .7px; text-decoration: none; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background-color: #1a508b; background-image: url(&quot;https://mail.crisp.chat/images/linear-gradient(-1deg,#137ECE2%,#288BD598%)&quot; );color: #ffffff; padding: 12px 24px;">View Project</a></td>
                              </tr>
                              <tr style="border: 0 none; border-collapse: separate;">
                                <td class="c-ryskht c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-size: 12.72727px; font-style: italic; padding-top: 52px;"
                                  valign="middle">For more inquiries, please visit our website https://splitsheet.herokuapp.com/</td>
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
            console.log("successful");
          })
          .catch((err) => {
            console.log(err);
          });
      };

      emailNotify();
      project.collaborators.unshift(collaborators);
      await collaborator.save();
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST /resend/:id/:collaboratorId
//description: this is going to resend an email to a collaborator
//access : Private
router.post("/resend/:id/:collaboratorId", auth, async (req, res) => {
  try {
    const project = await Project.find({ _id: req.params.id });

    //Pull out collaborator
    const collaborator = project[0].collaborators.find(
      (collaborator) =>
        collaborator.collaboratorId === req.params.collaboratorId
    );
    // Make sure collaborator exists
    if (!collaborator) {
      return res.status(404).json({ msg: "Collaborator does not exist" });
    }
    //check user
    if (project[0].user.toString() !== req.user.id) {
      return res.status(401).json({
        msg: "User not authorized to resend email to this collaborator",
      });
    }

    const emailNotify = () => {
      const msg = {
        to: collaborator.email,
        from: process.env.userEmail,
        subject: `Please sign this splitsheet -> ${project[0].name}`,
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
                                valign="middle">Hello, you have been added as a collaborator to this project -> ${project[0].name}</td>
                            </tr>

                            <tr style="border: 0 none; border-collapse: separate;">
                              <td class="c-eitm3s c-16v5f34" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; padding-top: 12px;"
                                valign="middle">Click on the button below to view the project and sign.</td>
                            </tr>
                            <tr style="border: 0 none; border-collapse: separate;">
                              <td class="c-rdekwa" style="border: 0 none; border-collapse: separate; vertical-align: middle; padding-top: 38px;" valign="middle"><a href="https://splitsheet.herokuapp.com/${project[0]._id}/${collaborator.collaboratorId}" target="_blank"
                                  class="c-1eb43lc c-1sypu9p c-16v5f34" style="color: #000000; -webkit-border-radius: 4px; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; line-height: 15px; display: inline-block; letter-spacing: .7px; text-decoration: none; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background-color: #1a508b; background-image: url(&quot;https://mail.crisp.chat/images/linear-gradient(-1deg,#137ECE2%,#288BD598%)&quot; );color: #ffffff; padding: 12px 24px;">View Project</a></td>
                            </tr>
                            <tr style="border: 0 none; border-collapse: separate;">
                              <td class="c-ryskht c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-size: 12.72727px; font-style: italic; padding-top: 52px;"
                                valign="middle">For more inquiries, please visit our website https://splitsheet.herokuapp.com/</td>
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
          console.log("successful");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    emailNotify();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// router.post("/pdfStatus/:id/:collaboratorId", async (req, res) => {
//   const project = await Project.find({
//     _id: req.params.id,
//     "collaborators.collaboratorId": req.params.collaboratorId,
//   });

//   let trueResponse = ""
//   if (project) {
//     project[0].collaborators.map(item => {
//       if(item.signed === true) {
//         console.log("yes")
//         trueResponse = "Signed successfully"
//       }
//       else {
//         console.log("No")
//         trueResponse = "Not signed"
//       }
//     })

//     console.log(trueResponse)
//     return res.status(200).send(project);
//   } else {
//     res.status(500).send("No Project found");
//   }
// });

router.get("/pdfStatus/:id/:collaboratorId", async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    "collaborators.collaboratorId": req.params.collaboratorId,
  });
  if (project) {
    const collaborator = project.collaborators.filter((x) => x.signed == false);
    res.json(collaborator);
  }
});

module.exports = router;

// const client = require('twilio')(accountSid, authToken);
// const fs = require('fs');
// const ical = require('ical-generator');
// const moment = require('moment');

// const crypto = require('crypto');
// const collaboratorId = 'braitsch';
// const hash = crypto.createHash('md5').update(collaboratorId).digest('hex');
// console.log(hash); // 9b74c9897bac770ffc029102a200c5de

// 	const base64_encode = (file) => {
// 			var bitmap = fs.readFileSync(file);
// 			return new Buffer(bitmap).toString('base64');
// 		};

// const statusResolver = {
// 	0: 'Your Order has been received a Technician will be assigned and you will be notified',
// 	1: 'A Technician is on the way',
// 	2: 'A Technician has arrived',
// 	3: 'A Technician has completed his visit'
// };

// const statusNotify = (order, recipient) => {
// 	if (recipient.email) {
// 		emailNotify(collaborator, 'Please sign this shit', statusResolver[order.status]);
// 	}

// 	if (recipient.mobile) {
// 		smsNotify(recipient.mobile, statusResolver[order.status]);
// 	}
// };

// const smsNotify = (mobile, message) => {
// 	client.messages
// 		.create({
// 			from: '+16473705743',
// 			to: mobile,
// 			body: message
// 		})
// 		.then((message) => console.log(message.sid))
// 		.catch((error) => {
// 			console.log(error);
// 		})
// 		.done();
// };

// const sendCalenderInvite = (asset, order) => {
//   console.log(order.orderDate)

//   const cal = ical({ domain: 'sparkplugcode.com', name: 'Asset Tracking' });
//   	// overwrite domain
// 		cal.domain('http://sparkplugcode.com');

// 		cal.createEvent({
// 			start: moment(order.orderDate),
// 			end: moment(order.orderDate).add(1, 'hour'),
// 			summary: order.name,p
// 			description: `JobID: ${order.name} /n Scope: ${order.scope}`,
// 			location: 'address',
//       url: 'http://sparkplugcode.com',
//       organizer: 'Orderflow <lumi@sparkplugcode.com>'
// 		});

//   const calstring = cal.toString();

// 	fs.writeFile('event.ics', calstring, (err) => {
// 		if (err) throw err;
// 		console.log('The file has been saved!');

// 		let data_base64 = base64_encode('event.ics');

// 		const msg = {
// 			to: asset.email,
// 			from: 'lumi@sparkplugcode.com',
// 			subject: 'ItiPack - Tracking',
// 			text: `An order as been created and Assigned to you /n JobID: ${order.name} /n Scope: ${order.scope}`,
// 			html: `<strong>An order as been created and Assigned to you <strong> <br/> JobID: ${order.name} <br/> Scope: ${order.scope}`,
// 			attachments: [
// 				{
// 					filename: `event.ics`,
// 					content: data_base64,
// 					type: 'application/ics',
// 					disposition: 'attachment'
// 				}
// 			]
// 		};

// 		sgMail
// 			.send(msg)
// 			.then((response) => {
// 				console.log(response);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	});
// };

// const emailNotify = (collaborator) => {
// 	const {email, subject, message} = collaborator;

// 	const msg = {
// 		to: email,
// 		from: 'lumi@sparkplugcode.com',
// 		subject: subject,
// 		text: message,
// 		html: '<strong>'`http://splitsheet.com/splitsheetId/collaborator.hash` + '</strong>',
// 	};
// 	sgMail
// 		.send(msg)
// 		.then((response) => {
// 			console.log(response);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// module.exports = {
// 	statusNotify: statusNotify,
// 	emailNotify: emailNotify,
// 	sendCalenderInvite,
// 	smsNotify
// };

// /*
// 1. Create splitsheet endpoint '/splitsheet'
// 	1a. this endpoint returns the collaborator allowed to sign this splitsheet

// '/splitsheet'

// - lookup decrypt req.body.hash
// - run collaborator.findbyId()
// res.json(collaborator)

// 2. Hide Sign on click

// 	const [showlabel, setShowlabel] = React.useState(true)
//   <SignatureCanvas penColor='green' onBegin={onBegin}
// 	canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />

// 	const onBegin = () => {
// 		setShowLabel()
// 	}
