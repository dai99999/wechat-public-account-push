/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx5a23740412e2dfe8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0f1475cb84345b808e1d8fb1828d9acb',

  PROVINCE: '四川',
  CITY: '成都',
  CITY_NAME: '郫县',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oU3Ej6dZSatBG21e7hEE5VxTeqPQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'nhYlDGCiBQOM3W7wyw8w8Vry3xMUTjZu_ARN8wmMsDM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '01-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-12-30' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'GIP1SskVVyOfJg84p9aITVoOvsQJ7FNRh6aXiX8jT8w',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oU3Ej6fsrqcC6_9K7jFCyQmO58S4',
    }
  ],

}

module.exports = USER_CONFIG

