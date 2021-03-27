import { View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
  text: yup.string(),
  rating: yup
    .number("Rating must be a number")
    .required("Rating is required")
    .integer("Rating must be an integer between 0 and 100")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating cannot be more than 100"),
  ownerName: yup.string().required("Owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
});

const CreateReviewContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={{
        text: "",
        rating: "",
        ownerName: "",
        repositoryName: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default CreateReviewContainer;
