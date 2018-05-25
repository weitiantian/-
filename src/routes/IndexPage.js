import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Input,Button } from 'antd'; 
function IndexPage() {
  return (
    <div className={styles.normal}>
        <p><Input placeholder="请输入账户名" className={styles.input}/></p>
        <p><Input placeholder="请输入密码" type='password' className={styles.input}/></p>
        <Button type="primary" className={styles.btn}>登录</Button>
        <Button type="primary" className={styles.btn}>注册</Button>
    </div>
  )
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
