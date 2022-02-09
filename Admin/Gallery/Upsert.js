import { Form, Text, LongText } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please provide a title for the gallery'
    />
    <LongText
        column='Description'
        placeholder='Description'
    />
</>

const UpsertGallery = () => {
    return <Form
        entityType='Gallery'
        inputs={inputs}
    />
}

export default UpsertGallery