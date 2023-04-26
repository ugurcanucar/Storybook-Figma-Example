import CustomButton from "../components/Button/button";

export default {
  title: "CustomButton",
  component: CustomButton,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <CustomButton {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: "red",
  text: "Red Example Test",
  padding: "30px",
  radius: "20px",
};
