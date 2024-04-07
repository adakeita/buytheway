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
      alert("Form submitted successfully!");
      resetForm();
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-xl m-auto py-8 px-4">
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className={`shadow appearance-none border ${
            formik.touched.fullName && formik.errors.fullName
              ? "border-red-500"
              : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          {...formik.getFieldProps("fullName")}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.fullName}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={`shadow appearance-none border ${
            formik.touched.subject && formik.errors.subject
              ? "border-red-500"
              : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          {...formik.getFieldProps("subject")}
        />
        {formik.touched.subject && formik.errors.subject && (
          <p className="text-red-500 text-xs italic">{formik.errors.subject}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`shadow appearance-none border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="body"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="body"
          name="body"
          className={`shadow appearance-none border ${
            formik.touched.body && formik.errors.body
              ? "border-red-500"
              : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          {...formik.getFieldProps("body")}
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p className="text-red-500 text-xs italic">{formik.errors.body}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={formik.isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
