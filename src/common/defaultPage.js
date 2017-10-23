import React, { Component } from 'react'
import configureStore from './store'
import mainStyle from '../common/styles/style.css'
// import mainStyle from '../common/styles/style.sass'
// import mainStyle from '../common/styles/style.less'

const mainPage = (Page) => class DefaultPage extends Component {
  static getInitialProps() {
    //
  }

  render () {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: mainStyle }} />
        <Page {...this.props}/>
      </div>
    )
  }
}

const defaultPage = ({ Page, reducer }) => (
  configureStore({Page: mainPage(Page), reducer})
)

export default defaultPage