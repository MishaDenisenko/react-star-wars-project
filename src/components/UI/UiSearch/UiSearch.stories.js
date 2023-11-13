import { useState } from 'react';
import UiSearch from './UiSearch';

export default {
    title: 'Ui-Kit/UiSearch',
    component: UiSearch
};

const Template = (args) => {
    const [value, setValue] = useState('');
    
    const handleInputChange = value => {
        setValue(value);
    }
    
    return <UiSearch {...args} value={value} inputOnChange={handleInputChange}/>
}

const props = {
    value: '',
    inputOnChange: () => console.log('Input Change'),
    placeholder: 'Placeholder',
    classes: '',
}

export const Default = Template.bind({});

Default.args = {
    ...props,
};