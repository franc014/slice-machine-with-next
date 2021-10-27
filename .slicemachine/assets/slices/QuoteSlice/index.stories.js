import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"Commodo incididunt do cillum amet quis. Laborum quis ea commodo quis.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quoteText":[{"type":"paragraph","text":"In aliquip ea duis. Dolor Lorem consectetur nulla proident dolor in elit nisi adipisicing in eu aliqua elit ex.","spans":[]}],"quoteReference":[{"type":"paragraph","text":"Velit aliquip ullamco enim velit labore non aliqua irure quis occaecat nulla.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
