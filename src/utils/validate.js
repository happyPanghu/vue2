/**
 * 配置本地 http://vee-validate.logaretm.com/localization.html#localized-files 
 * 基础语法 http://vee-validate.logaretm.com/validation.html#syntax
 */
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'; //引入中文文件

/**
 * api          规则对应中文
 * message      映射校验方法的中文错误提示
 * attributes   映射目标对象的中文名称 
 */
const dictionary = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: (field) => "请您输入" + field,
        username: () => '请输入正确的用户名',
        min: (field, num) => '最小' + num + '位',
        max: (field, num) => '最大' + num + '位',
        xx: (a, b, c, d) => a + '至少20位',
        min_value:(field,num)=>'最小数字是'+num,
        max_value:(field,num)=>'最大数字是'+num
      },
      attributes: {
        email: '邮箱',
        password: '密码',
        name: '账号',
        phone: '手机',
        aa:'数字'
      }
    }
  }
};

/**
 * 自定义添加规则
 * 没有对应中文释义，需指定 data-vv-as(优先级高) 或者在dictionary.attributes中添加
 */
const xx = (value, args) => {
  return value.length > 20
};

Validator.extend('xx', xx);


Vue.use(VeeValidate, dictionary);
