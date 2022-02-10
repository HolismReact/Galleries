import CollectionsIcon from '@mui/icons-material/Collections';
import { List, ImageGroup, Image, Text, ItemAction } from '@List'
import UpsertGallery from './Upsert'

const filters = <>
  <Text
    column='Title'
    placeholder='Title'
  />
</>

const headers = <>
  <th></th>
  <th>Title</th>
  <th>Images</th>
</>

const row = (item) => <>
  <td>
    <Image
      url={item.relatedItems.imageUrl}
      uploadUrl={`/gallery/setImage?galleryId=${item.id}`}
    />
  </td>
  <td>{item.title}</td>
  <td>
    <ImageGroup
      urls={item.relatedItems.images?.map(i => i.relatedItems.url)}
    />
  </td>
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
