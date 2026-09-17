/**
 * ============================================================
 *  国庆行程配置 —— 直接改这里即可替换整页内容
 * ============================================================
 * 替换说明：
 * 1. meta / banner / transport / hotel / budget / days 都可整段替换
 * 2. banner.mode = "single" 用 image 一张图；"split" 用 left + right 左右拼
 * 3. days[].items[].icon 可选：train | plane | car | walk | scenic | mountain | ferry | food | hotel
 * 4. items[].thumb / badge 可选；没有就留空或不写
 * 5. transport[] 机票/火车卡片：type = train | plane
 * 6. hotels[] 酒店卡片：name / city / checkIn / checkOut / nights / address / room / price / badge / note / thumb
 * 7. budget.items[] 费用列表：label / amount / note；budget.currency / totalLabel 可选
 */
window.TRIP_CONFIG = {
  meta: {
    title: "西安 · 青岛国庆之旅",
    dateRange: "10月1日 - 10月6日 (6天5晚)",
    quote: "“从兵马俑到碧海蓝天，走过国庆最美路线”",
    quoteSub: "古城长安 · 海上青岛",
    location: "西安 · 青岛",
    themeColor: "#e85a4f",
  },

  banner: {
    mode: "split",
    image: "./assets/guoqing/banner.jpg",
    left: "./assets/guoqing/banner-xian.jpg",
    right: "./assets/guoqing/banner-qingdao.jpg",
  },

  /** 机票 / 火车卡片列表 —— 替换本数组即可 */
  transport: [
    {
      type: "train",
      date: "10.1",
      weekday: "周四",
      no: "",
      from: { city: "成都", station: "成都东站", time: "08:00" },
      to: { city: "西安", station: "西安北站", time: "" },
      duration: "高铁直达",
      seat: "",
      badge: "抢票中",
      note: "",
    },
    {
      type: "plane",
      date: "10.3",
      weekday: "周六",
      no: "早班",
      from: { city: "西安", station: "西安咸阳机场", time: "07:00" },
      to: { city: "青岛", station: "青岛机场", time: "" },
      duration: "约2.5h",
      seat: "",
      badge: "待定",
      note: "",
    },
    {
      type: "plane",
      date: "10.6",
      weekday: "周二",
      no: "返程",
      from: { city: "青岛", station: "青岛机场", time: "" },
      to: { city: "成都", station: "成都双流", time: "" },
      duration: "飞回成都",
      seat: "",
      badge: "待定",
      note: "",
    },
  ],

  /** 酒店卡片列表 —— 替换本数组即可 */
  hotels: [
    {
      name: "西安酒店（待填写）",
      city: "西安",
      checkIn: "10.1",
      checkOut: "10.3",
      nights: "2晚",
      address: "建议兵马俑交通方便区域",
      room: "大床 / 双床",
      price: "",
      badge: "待预订",
      note: "10.1 入住 · 10.3 退房后飞青岛",
      thumb: "",
    },
    {
      name: "青岛酒店（待填写）",
      city: "青岛",
      checkIn: "10.3",
      checkOut: "10.6",
      nights: "3晚",
      address: "建议老城 / 海滨附近",
      room: "大床 / 双床",
      price: "",
      badge: "待预订",
      note: "10.3 入住 · 10.6 退房返程",
      thumb: "",
    },
  ],

  /** 费用预算列表 —— 替换 items 即可；amount 用数字或带单位字符串 */
  budget: {
    currency: "¥",
    totalLabel: "预计合计",
    note: "金额可按实际票据再改",
    items: [
      { label: "高铁 · 成都 → 西安", amount: "", note: "10.1" },
      { label: "机票 · 西安 → 青岛", amount: "", note: "10.3" },
      { label: "机票 · 青岛 → 成都", amount: "", note: "10.6" },
      { label: "酒店 · 西安 2晚", amount: "", note: "" },
      { label: "酒店 · 青岛 3晚", amount: "", note: "" },
      { label: "门票 · 兵马俑", amount: "", note: "10.2" },
      { label: "门票 · 崂山", amount: "", note: "10.5" },
      { label: "市内交通 / 打车", amount: "", note: "" },
      { label: "餐饮", amount: "", note: "按天估算" },
      { label: "其他杂费", amount: "", note: "" },
    ],
  },

  days: [
    {
      label: "10.1",
      weekday: "周四",
      title: "10月1日 · 成都 → 西安",
      subtitle: "高铁启程，开启古城之旅",
      items: [
        {
          time: "08:00",
          icon: "train",
          title: "出发 · 成都东站 → 西安北站",
          desc: "高铁前往西安",
          badge: "已预订",
        },
        {
          time: "下午",
          icon: "walk",
          title: "酒店周边游玩",
          desc: "抵达入住后，逛酒店周边街巷与美食",
        },
      ],
    },
    {
      label: "10.2",
      weekday: "周五",
      title: "10月2日 · 兵马俑",
      subtitle: "探访世界第八大奇迹",
      items: [
        {
          time: "全天",
          icon: "scenic",
          title: "兵马俑参观",
          desc: "秦始皇兵马俑博物馆 · 一号坑 / 二号坑 / 铜车马",
        },
      ],
    },
    {
      label: "10.3",
      weekday: "周六",
      title: "10月3日 · 西安 → 青岛",
      subtitle: "飞抵海滨，漫步老城与海岸线",
      items: [
        {
          time: "07:00",
          icon: "plane",
          title: "出发 · 西安 → 青岛",
          desc: "早班飞机飞青岛",
          badge: "已预订",
        },
        {
          time: "上午",
          icon: "walk",
          title: "老城街巷漫步",
          desc: "广西路 · 龙江路 · 大学路 · 鱼山路 · 小鱼山 · 景山公园",
        },
        {
          time: "下午",
          icon: "scenic",
          title: "海岸线散步",
          desc: "琴屿路 · 小青岛 · 鲁迅公园 · 第一海水浴场",
        },
        {
          time: "傍晚",
          icon: "scenic",
          title: "八大关 · 花石楼",
          desc: "八大关 · 花石楼 · 第二海水浴场",
        },
      ],
    },
    {
      label: "10.4",
      weekday: "周日",
      title: "10月4日 · 奥帆与轮渡",
      subtitle: "海风、广场与港湾一日",
      items: [
        {
          time: "上午",
          icon: "scenic",
          title: "奥帆中心沿线",
          desc: "钨丝广场 · 情人坝 · 奥帆中心",
        },
        {
          time: "下午",
          icon: "scenic",
          title: "燕儿道 · 小麦岛",
          desc: "燕儿道漫步，打卡小麦岛",
        },
        {
          time: "傍晚",
          icon: "ferry",
          title: "轮渡",
          desc: "乘轮渡看港湾暮色",
        },
      ],
    },
    {
      label: "10.5",
      weekday: "周一",
      title: "10月5日 · 崂山",
      subtitle: "山海相连，崂山一日游",
      items: [
        {
          time: "全天",
          icon: "mountain",
          title: "崂山游玩",
          desc: "崂山风景区 · 山海风光",
        },
      ],
    },
    {
      label: "10.6",
      weekday: "周二",
      title: "10月6日 · 返程成都",
      subtitle: "青岛飞回成都双流",
      items: [
        {
          time: "返程",
          icon: "plane",
          title: "青岛 → 成都双流",
          desc: "飞机回家",
          badge: "已预订",
        },
      ],
    },
  ],
};
