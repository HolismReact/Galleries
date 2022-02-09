import { Form, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please provide a title for the gallery'
    />
</>

const UpsertGallery = () => {
    return <Form
        entityType='Gallery'
        inputs={inputs}
    />
}

export default UpsertGallery