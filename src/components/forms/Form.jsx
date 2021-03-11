import React, { cloneElement } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import styled from "styled-components";
import styles from "../../styles";
import Button from "../common/Button";

const FormContainer = styled.form``;

function Form(props) {
  const schemaShape = {};
  props.fields.forEach(field => {
    schemaShape[field.props.name] = field.props.schema;
  });
  const schema = yup.object().shape(schemaShape);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormContainer
      onSubmit={handleSubmit(props.onSubmit)}
    >
      {props.fields.map((field, index) => 
        cloneElement(field, {
          key: index,
          inputRef: register(field.props.options),
          error: errors[field.props.name]?.message,
        })
      )}

      <Button
        color={styles.colors.purple}
        type="submit"
      >
        {props.submitText}
      </Button>
    </FormContainer>
  );
}

export default Form;
