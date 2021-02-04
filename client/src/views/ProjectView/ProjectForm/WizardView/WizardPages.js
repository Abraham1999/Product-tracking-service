import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

/** Converts a form value to uppercase **/
const upper = ([name], state, { changeValue }) => {
  changeValue(state, name, (value) => value && value.toUpperCase());
};

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children, mutators }) => {
    if (typeof children === "function") {
      return children(mutators);
    }

    return children;
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }
  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        mutators={{
          ...arrayMutators,
          upper,
        }}
      >
        {({
          handleSubmit,
          form: { mutators }, // injected from final-form-arrays above
          submitting,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            {
              // activePage
              <activePage.type {...activePage.props} mutators={mutators} />
            }

            <div className="">
              <ul className="mt-2 leading-8">
                <li className="inline">
                  <div className="relative inline-flex items-center">
                    {!isLastPage && (
                      <button
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        type="submit"
                      >
                        Next »
                      </button>
                    )}
                    <br />
                  </div>
                </li>

                <li className="inline">
                  <div className="relative inline-flex items-center ">
                    {page > 0 && (
                      <button
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 mr-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200"
                        onClick={this.previous}
                      >
                        Previous
                      </button>
                    )}
                  </div>
                </li>
                <li className="inline">
                  <div className="relative inline-flex items-center">
                    {isLastPage && (
                      <button
                        type="submit"
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        disabled={submitting}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </form>
        )}
      </Form>
    );
  }
}
