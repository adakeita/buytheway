import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      subject: "",
      email: "",
      body: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      subject: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      body: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate form submission
      console.log(values);
      //make div here instead
      alert("Form submitted successfully!");
      resetForm();
      setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="FORM max-w-xl bg-form-grey shadow-form my-10 mx-auto py-8 px-4 rounded-md"
    >
      <div className="FORM_CONTENT">
        <div className="FORM-ITEM NAME mb-4">
          <label
            htmlFor="fullName"
            className="INPUT-LABEL block text-black text-base font-bold mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            className={`FORM-INPUT shadow appearance-none rounded-lg border focus:ring-2 focus:ring-logo-green-hover transition-all ease-in-out duration-300 ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-300"
            } w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm italic font-semibold">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        <div className="FORM-ITEM SUBJECT mb-4">
          <label
            htmlFor="subject"
            className="INPUT-LABEL block text-black text-base font-bold mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Enter subject here..."
            type="text"
            className={`FORM-INPUT rounded-lg shadow appearance-none focus:ring-2 focus:ring-logo-green-hover border transition-all ease-in-out duration-300 ${
              formik.touched.subject && formik.errors.subject
                ? "border-red-500"
                : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...formik.getFieldProps("subject")}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-sm italic font-semibold">
              {formik.errors.subject}
            </p>
          )}
        </div>

        <div className="FORM-ITEM email mb-4">
          <label
            htmlFor="email"
            className="INPUT-LABEL block text-black text-base font-bold mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            placeholder="john.doe@email.com"
            type="email"
            className={`FORM-INPUT rounded-lg shadow appearance-none focus:ring-2 focus:ring-logo-green-hover transition-all border ease-in-out duration-300 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm italic font-semibold">{formik.errors.email}</p>
          )}
        </div>

        <div className="FORM-ITEM MSG mb-6">
          <label
            htmlFor="body"
            className="INPUT-LABEL block text-black text-base font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="body"
            name="body"
            placeholder="Enter your message here..."
            className={`FORM-INPUT rounded-lg shadow appearance-none focus:ring-2 focus:ring-logo-green-hover border transition-all ease-in-out duration-300 ${
              formik.touched.body && formik.errors.body
                ? "border-red-500"
                : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            {...formik.getFieldProps("body")}
          ></textarea>
          {formik.touched.body && formik.errors.body && (
            <p className="text-red-500 text-sm italic font-semibold">{formik.errors.body}</p>
          )}
        </div>
        <div className="BTN-WRAPPER_CONTACT w-full flex justify-center">
          <button
            type="submit"
            className="bg-logo-green hover:bg-logo-green-hover border-white border-2 text-white font-bold py-2 px-6 rounded-md shadow-formBtn hover:scale-105 transition duration-300 ease-in-out"
            disabled={formik.isSubmitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
