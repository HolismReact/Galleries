import CollectionsIcon from '@mui/icons-material/Collections';
import { List, Text, ItemAction } from '@List'
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

const itemActions = (item) => <>
  <ItemAction
    title='Manage images'
    icon={CollectionsIcon}
    goTo={`/media/images?entityType=${item.relatedItems.entityType}&entityGuid=${item.guid}`}
  />
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
    itemActions={itemActions}
  />
}

export default Galleries
