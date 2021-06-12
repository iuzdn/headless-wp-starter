import React, { Component } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';

class Customers extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch(`${Config.apiUrl}/wc/v3/customers`);
    const json = await res.json();
    console.log(json);
    return json;

    // const customers = axios
    //   .post(`${Config.apiUrl}/wc/v3/customers`)
    //   .then(res => {
    //     const { data } = res;
    //     console.log(data);
    //     return data;
    //   })
    //   .catch(error => {
    //     console.log(error.response.data);
    //   });
  }

  render() {
    preventDefault();
    console.log(this.props);
    const { headerMenu } = this.props;

    return (
      <Layout className="test">
        <Menu menu={headerMenu} />
      </Layout>
    );
  }
}

export default PageWrapper(Customers);
