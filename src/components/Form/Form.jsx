import { Form, FormInput, FormLabel, FormInputIcon } from './Form.styled';
import svg from '../../images/sprite.svg';

export default function MyContactForm() {
  return (
    <Form>
      <FormLabel>
        Имя
        <FormInput type="text" name="name" autocomplete="off" required />
        <FormInputIcon>
          <use href="../../images/sprite.svg#person"></use>
        </FormInputIcon>
      </FormLabel>
      <FormLabel>
        Телефон
        <inFormInputut
          type="tel"
          name="telephone"
          autocomplete="off"
          required
        />
        <FormInputIcon>
          <use href="svg#phone"></use>
        </FormInputIcon>
      </FormLabel>
    </Form>
  );
}
