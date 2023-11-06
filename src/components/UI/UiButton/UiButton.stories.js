import UiButton from "./UiButton";
import PropTypes from "prop-types";

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args}/>;

const props = {
    text: 'Hello',
    onClick: () => console.log("click"),
    disabled: false,
    theme: 'dark',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
}

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
}
