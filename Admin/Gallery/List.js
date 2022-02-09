import { List, Text } from '@List'
import UpsertGallery from './Upsert'

const filters = <>
  <Text
    column='Title'
    placeholder='Title'
  />
</>

const headers = <>
  <th>Title</th>
  <th>Images</th>
</>

const row = (item) => <>
  <td>{item.title}</td>
  <td>{item.relatedItems.imagesCount}</td>
</>

const Galleries = () => {
  return <List
    title='Galleries'
    entityType='Gallery'
    filters={filters}
    headers={headers}
    row={row}
    upsert={UpsertGallery}
    hasEdit={true}
    hasDelete={true}
  />
}

export default Galleries
