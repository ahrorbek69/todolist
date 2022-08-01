import React from 'react'
import MyInput from '../UI/Input/MyInput'
import MySelect from '../UI/mySelect/MySelect'

const FilterAddSearch = ({filter,setFilter}) => {
  return (
    <div className=' flex  justify-between my-2'>
        <MyInput 
        placeholder='Search...'
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        className={'form-control mr-2'}
        />
       <MySelect 
       value={filter.sort}
       onChange={selected => setFilter({...filter, sort: selected})}
        defaultValue={'Sorted By'}
        options={[
          {
            value: 'title',name: 'Title'
          },
          {
            value: 'body',name: 'Body'
          },
        ]}
       />
      </div>
  )
}

export default FilterAddSearch