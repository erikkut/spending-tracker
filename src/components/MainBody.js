import React from "react";
import { Box, Button, Form, FormField, MaskedInput, Select } from "grommet";
import { Categories, FormDefaultValue } from "../constants/FormConstants";

export default function MainBody(props) {
  const [value, setValue] = React.useState(FormDefaultValue);
  return (
    <Box flex align='center' justify='center'>
      <Form
        value={value}
        onChange={(nextValue) => {
          console.log("Change", nextValue);
          setValue(nextValue);
        }}
        onReset={() => setValue(FormDefaultValue)}
        onSubmit={(event) => console.log("Submit", event.value, event.touched)}
      >
        <FormField label='' name='cost' required>
          <MaskedInput
            name='cost'
            mask={[{ regexp: /^\d*\.?\d*$/, placeholder: "$" }]}
          />
        </FormField>
        <FormField label='' name='description' placeholder="Description" required></FormField>
        <FormField label='' name='category' required>
          <Select name='category' options={Categories} placeholder="Category" focusIndicator={false}/>
        </FormField>
        <Box direction='row' justify='between' margin={{ top: "medium" }}>
          <Button type='reset' label='Reset' />
          <Button label='Submit' type='submit' primary />
        </Box>
      </Form>
    </Box>
  );
}
