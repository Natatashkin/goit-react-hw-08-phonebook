import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { FormField, Input, Label, ErrorMessageStyle } from './Form.styled';
import Button from '../Button';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import * as selectors from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegEx =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, 'The name must contain only characters')
    .required(),
  number: yup
    .string()
    .matches(phoneRegEx, 'Phone number is not valid')
    .min(7, "It's not looks like phone!")
    .max(13, 'Must be minimum 7 maximum 13 digits ')
    .required(),
});

const AppForm = ({ contacts }) => {
  const dispatch = useDispatch();

  const checkUniqueName = newName => {
    const normalyzeName = newName.toLocaleLowerCase();
    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name } = values;
    const newName = checkUniqueName(name);

    if (newName) {
      toast.error(`Name ${name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact(values));
    toast.success(`${values.name} was added to contacts!`);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <Label htmlFor="name">Contact Name</Label>
            <Input name="name" type="text" placeholder=" " />
            <ErrorMessage
              name="name"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <FormField>
            <Label htmlFor="number">Contact Number</Label>
            <Input name="number" type="tel" placeholder=" " />
            <ErrorMessage
              name="number"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <Button type={'submit'} title={'Add Contact'} />
        </Form>
      </Formik>
    </div>
  );
};

export default AppForm;
