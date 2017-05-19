import React,{Component} from 'react'
import SearchContent from './searchContent'
import { Input,Icon,Button,Radio } from 'antd'
const Search = Input.Search
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class SearchList extends Component{
  render(){
    return(
      <div className="m-search">
        <div className="search_input">
          <Search
          onSearch={value => console.log(value)}
          prefix={<Icon type="search" style={{ fontSize: 27 }} />}
          suffix=""
          />
          <Button type="primary">搜索</Button>
          </div>
          <RadioGroup defaultValue="a" size="large">
            <RadioButton value="a">全站</RadioButton>
            <RadioButton value="b">视频</RadioButton>
            <RadioButton value="c">问答</RadioButton>
            <RadioButton value="d">招聘</RadioButton>
          </RadioGroup>
          <SearchContent />
      </div>
    )
  }
}
export default SearchList
