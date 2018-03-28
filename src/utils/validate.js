//http://vee-validate.logaretm.com/localization.html#localized-files
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'; //引入中文文件

/**
 *message  校验方法出错的提示
 *attributes 目标对象的中文名称(只对已定义的生效，未定义过的 需指定 data-vv-as)
 */

const dictionary = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: (field) => "请您输入" + field,
        phone: () => '格式',
        username: () => '请输入正确的用户名',
        min: (field, num) => '最小' + num + '位',
        max: (field, num) => '最大' + num + '位'
      },
      attributes: {
        email: '邮箱',
        password: '密码',
        name: '账号',
        phone: '手机'
      }
    }
  }
};


/*Validator.extend('username', {
  getMessage: field => '用户名必须大于3位',
  validate: value =>  value.length>3
});*/

Vue.use(VeeValidate, dictionary);
