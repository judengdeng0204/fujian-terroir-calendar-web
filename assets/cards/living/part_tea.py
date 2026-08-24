# -*- coding: utf-8 -*-
# 茶类 16 种物产五维内容（FJ001–FJ016）
# 来源规则：优先复用数据包 sources_digest 中 A/B 级真实 URL；新检索来源为本次搜索确认的 URL。
# 空维规则：无可靠来源的维度 content=null + reason。

TEA_PRODUCTS = [
# ============ FJ001 大田美人茶 ============
{
  "product_id": "FJ001",
  "living": {
    "production_craft": {
      "content": "美人茶的茶青必须被小绿叶蝉叮咬过才能采，茶农在海拔800米以上的高山茶园留养茶丛、分批采摘一芽一叶或一芽二叶，再经萎凋、做青、发酵、杀青、揉捻、烘干制成。让虫子先咬、人再采收，是大田人对高山生态最直接的利用。",
      "confidence": "high",
      "sources": [
        {"source_name": "三明市农业农村局《大田：符合537项检测标准，自然农法铸就美人茶香》", "source_type": "政府", "source_url": "http://smsnyj.sm.gov.cn/tsny/spyb/202407/t20240715_2042975.htm", "evidence_level": "A", "quote": "江山美人茶园位于福建省三明市大田县屏山乡，茶园面积2400余亩，均分布于海拔1000～1300m的高山峰峦之间。"},
        {"source_name": "三明日报《一片小叶子 撑起40亿大产值》", "source_type": "专业媒体", "source_url": "http://smrb.smnet.com.cn/pc/layout/content/202404/18/content_151308.html", "evidence_level": "B", "quote": "4月11日，在海拔1100多米的屏山乡美阳村扬美茶厂茶叶种植基地……20多位茶农忙着采摘春茶。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "大田的茶季从四月排到入秋：春茶四月上旬开采，五月中旬办开茶节，喊山醒茶后开园；夏茶五至七月是小绿叶蝉最活跃、美人茶最香的采制季，茶农分批上山，一年要采三至六轮，高山茶园的劳作几乎贯穿全年。",
      "confidence": "high",
      "sources": [
        {"source_name": "三明日报《一片小叶子 撑起40亿大产值》", "source_type": "专业媒体", "source_url": "http://smrb.smnet.com.cn/pc/layout/content/202404/18/content_151308.html", "evidence_level": "B", "quote": "4月11日，在海拔1100多米的屏山乡美阳村扬美茶厂茶叶种植基地……20多位茶农忙着采摘春茶。"},
        {"source_name": "三明市农业农村局《大田美人茶》", "source_type": "政府", "source_url": "http://smsnyj.sm.gov.cn/tsny/tsncp/202503/t20250305_2104933.htm", "evidence_level": "A", "quote": "大田县茶园在海拔800米—1200米之间，独特的宜茶环境，孕育了众多优质名茶。"}
      ],
      "reason": None
    },
    "food": {
      "content": "因茶青被小绿叶蝉叮咬，美人茶成茶带一股蜜糖香与果韵，汤色橙黄明亮，是大田人待客与日常品饮的高山乌龙。夏茶蜜韵最足，当地人尤爱这时节的茶，热饮清香，冷泡亦甜润回甘。",
      "confidence": "medium",
      "sources": [
        {"source_name": "三明日报《一片小叶子 撑起40亿大产值》", "source_type": "专业媒体", "source_url": "http://smrb.smnet.com.cn/pc/layout/content/202404/18/content_151308.html", "evidence_level": "B", "quote": "4月11日，在海拔1100多米的屏山乡美阳村扬美茶厂茶叶种植基地……20多位茶农忙着采摘春茶。"}
      ],
      "reason": None
    },
    "culture": {
      "content": None,
      "confidence": None,
      "sources": [],
      "reason": "weak_evidence"
    },
    "industry": {
      "content": "大田县列入福建乌龙茶地理标志产品保护区域，“大田美人茶”是全省重点打造的区域公用品牌；屏山乡等高海拔乡镇茶园成片，春茶季采茶、制茶、收茶连成一条链，美人茶已成为大田山乡的支柱产业之一。",
      "confidence": "high",
      "sources": [
        {"source_name": "三明市农业农村局《大田美人茶》", "source_type": "政府", "source_url": "http://smsnyj.sm.gov.cn/tsny/tsncp/202503/t20250305_2104933.htm", "evidence_level": "A", "quote": "大田县茶园在海拔800米—1200米之间，独特的宜茶环境，孕育了众多优质名茶。"},
        {"source_name": "三明日报《一片小叶子 撑起40亿大产值》", "source_type": "专业媒体", "source_url": "http://smrb.smnet.com.cn/pc/layout/content/202404/18/content_151308.html", "evidence_level": "B", "quote": "4月11日，在海拔1100多米的屏山乡美阳村扬美茶厂茶叶种植基地……20多位茶农忙着采摘春茶。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ002 政和白茶 ============
{
  "product_id": "FJ002",
  "living": {
    "production_craft": {
      "content": "政和白茶按“九不采”原则手工分批采摘，鲜叶在20至25℃、相对湿度七成多的环境下萎凋四五十个小时，再低温烘焙成毛茶。不炒不揉，全靠摊晾与烘干让茶多酚缓慢转化，一年分春、夏、秋三季采制。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家质检总局2007年第55号公告（政和白茶地理标志产品保护）", "source_type": "政府", "source_url": "https://chinatt315.org.cn/gggs/2007-3/20/87525.html", "evidence_level": "A", "quote": "政和白茶地理标志产品保护范围…为福建省政和县现辖行政区域。海拔高度200m至800m；土壤为红壤和黄壤…土壤pH值4.5至6.5。"},
        {"source_name": "全国标准信息公共服务平台（政和白茶国家标准）", "source_type": "国家标准", "source_url": "https://std.samr.gov.cn/gb/search/gbDetailed?id=FD590F78F04B5ACBE05397BE0A0AC9A2", "evidence_level": "A", "quote": "本标准规定了政和白茶的地理标志产品保护范围、术语和定义、分类、要求……政和白茶已列入《中欧地理标志协定》互认产品清单，需同步制定外文版。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "政和茶农的茶季从春分排到秋分：春茶春分前后开采，清明谷雨最忙；小满转采夏茶，小暑又开秋茶。三季茶轮番登场，萎凋、烘焙、拣剔跟着走，茶园里的活计几乎贯穿全年，九月后还要扦插育苗、深耕施肥。",
      "confidence": "medium",
      "sources": [
        {"source_name": "全国标准信息公共服务平台（政和白茶国家标准）", "source_type": "国家标准", "source_url": "https://std.samr.gov.cn/gb/search/gbDetailed?id=FD590F78F04B5ACBE05397BE0A0AC9A2", "evidence_level": "A", "quote": "本标准规定了政和白茶的地理标志产品保护范围、术语和定义、分类、要求……"},
        {"source_name": "政和县地貌与气候资料（政和县人民政府）", "source_type": "政府", "source_url": "https://www.zhenghe.gov.cn/cms/pages/430514517369320000/attachments/20190805085404_7886_-517659827.pdf", "evidence_level": "A", "quote": "政和县全境气候属亚热带季风湿润气候区。年平均气温：西部18.3℃，中部17.4℃，东部14.7℃。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "政和白茶2007年获国家地理标志保护，保护范围覆盖政和全县，又入选《中欧地理标志协定》互认产品清单，2024年进入国家地理标志保护工程实施名单。白茶由此成为政和面向全国市场的一张区域名片。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家质检总局2007年第55号公告（政和白茶地理标志产品保护）", "source_type": "政府", "source_url": "https://chinatt315.org.cn/gggs/2007-3/20/87525.html", "evidence_level": "A", "quote": "政和白茶地理标志产品保护范围…为福建省政和县现辖行政区域。"},
        {"source_name": "全国标准信息公共服务平台（政和白茶国家标准）", "source_type": "国家标准", "source_url": "https://std.samr.gov.cn/gb/search/gbDetailed?id=FD590F78F04B5ACBE05397BE0A0AC9A2", "evidence_level": "A", "quote": "政和白茶已列入《中欧地理标志协定》互认产品清单，需同步制定外文版。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ003 松溪绿茶 ============
{
  "product_id": "FJ003",
  "living": {
    "production_craft": {
      "content": "松溪做绿茶走蒸青路子，鲜叶先蒸后烘，保留茶叶的鲜绿与清香，县里因此成为福建最大的蒸青绿茶出口基地。茶园按绿色食品标准管理，从种植到加工建立质量溯源体系，采、制、检都有据可查。",
      "confidence": "medium",
      "sources": [
        {"source_name": "松溪县人民政府·县茶业发展中心提案答复函", "source_type": "政府", "source_url": "https://www.songxi.gov.cn/cms/html/sxxrmzf/2022-07-12/2118685340.html", "evidence_level": "A", "quote": "“松溪绿茶”“松溪红茶”注册为中国地理标志证明商标。"},
        {"source_name": "福建茶叶网（fjtea.cn）", "source_type": "行业协会", "source_url": "http://fjtea.cn/index.php/News/detail/id/26348.html", "evidence_level": "C", "quote": "山地土壤多属酸性岩红壤，并含有丰富的腐殖质，土层深厚疏松，茶叶生产地海拔在300米到500米之间。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "三月下旬茶园开园，四月是松溪最忙的茶月，家家户户赶着采芽、蒸青、烘制。忙过春茶季，入夏转茶园除草修剪，九月再采一点秋茶，其余月份深耕封园，一年的大半时光都绕着茶山转。",
      "confidence": "medium",
      "sources": [
        {"source_name": "中国网海峡频道/松溪新闻网", "source_type": "专业媒体", "source_url": "http://www.songxixww.com/2024-05/07/content_1704002.htm", "evidence_level": "C", "quote": "芬芳四月，草长莺飞，正是一年当中采茶的好时节。随着春茶的全面开采……"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "松溪绿茶先后摘下福建首个绿茶类国家地理标志证明商标、中国驰名商标和国家地理标志保护产品，又进入《中欧地理标志协定》首批保护名录，从山区小县走到国际货架，是松溪最具分量的农业品牌。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省市场监督管理局", "source_type": "政府", "source_url": "http://scjgj.fujian.gov.cn/yw/sx/202008/t20200804_5341035.htm", "evidence_level": "A", "quote": "松溪绿茶继入选全国名特优新农产品名录后，先后获得福建省首个绿茶类国家地理标志证明商标、中国驰名商标、国家地理标志保护产品等荣誉。"},
        {"source_name": "松溪县人民政府·县茶业发展中心提案答复函", "source_type": "政府", "source_url": "https://www.songxi.gov.cn/cms/html/sxxrmzf/2022-07-12/2118685340.html", "evidence_level": "A", "quote": "“松溪绿茶”“松溪红茶”注册为中国地理标志证明商标。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ004 正山小种 ============
{
  "product_id": "FJ004",
  "living": {
    "production_craft": {
      "content": "正山小种的独特在一个“熏”字：茶青在青楼里用松柴加温萎凋，揉捻发酵后过红锅、复揉，最后用马尾松柴反复熏焙，成茶前还要做第三次松烟熏焙，让乌润的条索吸足松烟香——这套以松木烟熏为核心的工艺，是桐木独有的红茶做法。",
      "confidence": "high",
      "sources": [
        {"source_name": "武夷山新闻网（武夷山市融媒体中心）", "source_type": "专业媒体", "source_url": "http://www.wysxww.com/2018-07/30/content_469198.htm", "evidence_level": "A", "quote": "根据国家质量监督检验总局制定的《原产地保护标记管理规定》，正山小种原产地初步界定范围为东经117°38′6″~117°44′30″，北纬27°41′35″~27°…"},
        {"source_name": "《世界红茶的始祖武夷正山小种》邹新球主编（中国农业出版社）", "source_type": "科研机构", "source_url": "", "evidence_level": "B", "quote": "桐木村几个主要产茶区庙湾、江墩、挂墩、麻栗等地的平均海拔在700～1200米之间，全年平均气温在11～18℃之间。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "桐木海拔高、春天来得晚，春茶要到五月初才开园，六月底又赶采夏茶，一年只做两季。做茶期间，茶农围着青楼昼夜轮转，萎凋、揉捻、熏焙一气呵成，松烟味弥漫整个山坳，采制工具也在四月里提前备齐。",
      "confidence": "medium",
      "sources": [
        {"source_name": "智汇三农·正山小种", "source_type": "专业数据库", "source_url": "https://www.pwsannong.com/c/2016-04-13/546377.shtml", "evidence_level": "C", "quote": "因产地高寒，春茶于5月上旬开采，6月底采夏茶，一年两季。采摘标准为半开面3～4叶。"},
        {"source_name": "武夷山新闻网（武夷山市融媒体中心）", "source_type": "专业媒体", "source_url": "http://www.wysxww.com/2018-07/30/content_469198.htm", "evidence_level": "A", "quote": "正山小种原产地初步界定范围为东经117°38′6″~117°44′30″，北纬27°41′35″~27°…"}
      ],
      "reason": None
    },
    "food": {
      "content": "正山小种汤色红浓，带松烟香和桂圆般的甜润，武夷山本地习惯清饮，而欧洲人喜欢加奶加糖。当年正是这股烟香征服了英国宫廷，成为英式下午茶的茶底，也让“正山小种”成了红茶世界里绕不开的一味。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福建日报《一片武夷山深处的叶子，曾是国际贸易的“软黄金”》", "source_type": "专业媒体", "source_url": "https://www.toutiao.com/article/7625188657829347891", "evidence_level": "B", "quote": "世界红茶的故事，始于十六世纪中后期武夷山桐木村的一场“美丽的意外”。……1662年，凯瑟琳将其作为珍贵嫁妆带入英国宫廷。"}
      ],
      "reason": None
    },
    "culture": {
      "content": "正山小种被公认为世界红茶鼻祖：明末茶青意外发酵、松木熏焙，成就了桐木村的“正山”；1662年葡萄牙公主凯瑟琳把它作嫁妆带进英国宫廷，欧洲由此兴起下午茶风尚，欧洲人至今称武夷茶为“Bohea”——一片叶子就这样改写了世界饮茶史。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福建日报《一片武夷山深处的叶子，曾是国际贸易的“软黄金”》", "source_type": "专业媒体", "source_url": "https://www.toutiao.com/article/7625188657829347891", "evidence_level": "B", "quote": "据《清代通史》记载，正山小种于1640年输往欧洲。……葡萄牙的凯瑟琳公主。1662年，凯瑟琳将其作为珍贵嫁妆带入英国宫廷。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "正山小种2002年获原产地标记注册，2010年又注册地理标志证明商标；桐木一带茶园从2018年报道时的五千多亩扩到上万亩，老茶厂、青楼与茶旅连成一体，红茶鼻祖的身份让桐木成为武夷山最具故事的产区之一。",
      "confidence": "high",
      "sources": [
        {"source_name": "武夷山新闻网（武夷山市融媒体中心）", "source_type": "专业媒体", "source_url": "http://www.wysxww.com/2018-07/30/content_469198.htm", "evidence_level": "A", "quote": "根据国家质量监督检验总局制定的《原产地保护标记管理规定》，正山小种原产地初步界定范围为东经117°38′6″~117°44′30″，北纬27°41′35″~27°…"}
      ],
      "reason": None
    }
  }
},
# ============ FJ005 武夷岩茶 ============
{
  "product_id": "FJ005",
  "living": {
    "production_craft": {
      "content": "武夷岩茶讲“看青做青”：鲜叶晒青后反复摇青、静置，让叶缘氧化出“绿叶红镶边”，再杀青、揉捻，用炭火分初烘、摊凉、复烘，最后归堆、筛号、拣剔、拼配精制。岩韵的底子，一半在山场，一半在这套日夜连转的做青与焙火功夫里。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家标准 GB/T 18745-2006《地理标志产品 武夷岩茶》", "source_type": "国家标准", "source_url": "https://www.guifanku.com/932225.html", "evidence_level": "A", "quote": "四条溪流和峰峦、丘陵相互交错，形成独特的微域气候，空气湿润、多雾……土壤为火山砾石、红砂岩及页岩风化成的土壤。"},
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）《武夷岩茶地理标志产品保护要求》", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/6066/nid/9824", "evidence_level": "A", "quote": "年平均温度18～18.5℃……年降水量在2000mm左右，年平均相对湿度在80%左右。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "四月到五月是武夷山最忙的茶季，茶农白天采青、夜里摇青做青，通宵连轴转；春茶毛茶做完，六月初到八月初又进厂精制、焙火、归堆；夏茶小满采、秋茶立秋后采，一整年围着岩茶转，冬季还要深耕施基肥。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建日报《2023年武夷茶什么时候开采？釆制时间、标准参考表来啦》", "source_type": "专业媒体", "source_url": "https://www.fjdaily.com/app/content/2023-04/06/content_1836583.html", "evidence_level": "B", "quote": "武夷山主要品种的春茶采摘期约为4月中旬至5月中旬……从6月初至8月初基本处于岩茶的精制阶段。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "武夷岩茶是国家地理标志保护产品，GB/T 18745 标准划定产地范围与工艺要求，武夷山景区内的坑涧茶园构成“三坑两涧”等知名山场。茶园、茶厂与茶旅交织，岩茶是武夷山最具标志性的支柱产业之一。",
      "confidence": "medium",
      "sources": [
        {"source_name": "国家标准 GB/T 18745-2006《地理标志产品 武夷岩茶》", "source_type": "国家标准", "source_url": "https://www.guifanku.com/932225.html", "evidence_level": "A", "quote": "四条溪流和峰峦、丘陵相互交错，形成独特的微域气候，空气湿润、多雾……"},
        {"source_name": "行业自媒体《解密武夷岩茶著名山场及核心中的核心：三坑两涧》", "source_type": "自媒体", "source_url": "https://baijiahao.baidu.com/s?id=1703327542297490667", "evidence_level": "D", "quote": "在海拔分布上，武夷山景区境内的茶园山场海拔大多在200～450米，海拔最高的三仰峰也只达729.2米。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ006 邵武碎铜茶 ============
{
  "product_id": "FJ006",
  "living": {
    "production_craft": {
      "content": "邵武碎铜茶从三月采到五月中旬，按一芽一叶初展至一芽二叶的标准采摘，摊青后以100至200℃高温杀青，再揉捻、烘焙、精选。茶苗靠扦插繁殖，夏插五月下旬到六月上旬、秋插十月，茶园以有机肥为主。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）——邵武碎铜茶保护要求", "source_type": "政府", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/1247/nid/9918", "evidence_level": "A", "quote": "产地范围内海拔300～800米、坡度＜25°、pH值4.5～6.5，有机质含量≥2%，土层深厚的红壤、红黄壤、黄壤……采摘期在每年3月-5月中旬前。"},
        {"source_name": "国家质检总局2012年第205号公告", "source_type": "政府", "source_url": "https://www.cqn.com.cn/zj/content/2012-12/18/content_1713856.htm", "evidence_level": "A", "quote": "邵武碎铜茶产地范围为福建省邵武市现辖行政区域。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "邵武的茶事集中在春：三月开园，四月新茶陆续上市，茶农赶在五月中旬前把春茶采完、做透；入夏扦插育苗，秋冬修剪施肥，忙完春茶季，一年的功夫都花在养园上，茶园活计随季节轮转。",
      "confidence": "medium",
      "sources": [
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）——邵武碎铜茶保护要求", "source_type": "政府", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/1247/nid/9918", "evidence_level": "A", "quote": "采摘期在每年3月-5月中旬前。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "邵武碎铜茶2012年获国家地理标志保护，产地覆盖邵武市域，农产品地理标志又划出和平、肖家坊等16个乡镇144个村；和平镇留仙峰海拔千米以上的乱石岩缝茶园是核心产区，地标加持让这味高山绿茶走出深山。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家质检总局2012年第205号公告", "source_type": "政府", "source_url": "https://www.cqn.com.cn/zj/content/2012-12/18/content_1713856.htm", "evidence_level": "A", "quote": "邵武碎铜茶产地范围为福建省邵武市现辖行政区域。"},
        {"source_name": "邵武碎铜茶农产品地理标志登记信息", "source_type": "政府", "source_url": "https://www.sinogi.cn/wap/index.php/product/gg/id/1247", "evidence_level": "B", "quote": "邵武碎铜茶农产品地理标志地域保护范围为南平市邵武市所辖和平镇、肖家坊镇、桂林乡、金坑乡……16个乡镇（街道办事处）共计144个村（居委会）。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ007 坦洋工夫 ============
{
  "product_id": "FJ007",
  "living": {
    "production_craft": {
      "content": "坦洋工夫按红茶古法制作：采青后萎凋、揉捻，让叶汁充分氧化发酵，再烘干、精制，做出条索紧细、汤色红艳的工夫红茶。福安社口镇的坦洋村是它的命名地，山地茶园沿溪分布，是闽东红茶最老的一脉。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福安市农业农村局批复", "source_type": "政府", "source_url": "http://www.fjfa.gov.cn/bm/nyj/zfxxgkml/yzdgkzfxx_14172/202003/t20200326_1292200.htm", "evidence_level": "A", "quote": "坦洋工夫农产品地理标志保护具体地域：分布在辖区内的4个街道、13个镇、5个乡……总面积1871.42平方千米。"},
        {"source_name": "中国茶叶网·坦洋工夫茶的形态特征", "source_type": "行业协会", "source_url": "http://m.chawh.net/hoc/tygf/5447.html", "evidence_level": "C", "quote": "三月中下旬萌芽，四月上旬开始采摘，全年生长期220天。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "坦洋工夫的茶季从四月拉锯到深秋：谷雨前后采春茶，立夏后七天仍是采制高峰；六月采夏茶，九月十月又采秋茶。茶农一年要赶三趟采制，中间还得管园、施肥，几乎没有一个真正闲下来的月份。",
      "confidence": "medium",
      "sources": [
        {"source_name": "中国茶叶网·坦洋工夫茶的形态特征", "source_type": "行业协会", "source_url": "http://m.chawh.net/hoc/tygf/5447.html", "evidence_level": "C", "quote": "三月中下旬萌芽，四月上旬开始采摘，全年生长期220天。"},
        {"source_name": "福安市农业农村局批复", "source_type": "政府", "source_url": "http://www.fjfa.gov.cn/bm/nyj/zfxxgkml/yzdgkzfxx_14172/202003/t20200326_1292200.htm", "evidence_level": "A", "quote": "坦洋工夫农产品地理标志保护具体地域：分布在辖区内的4个街道、13个镇、5个乡……总面积1871.42平方千米。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "坦洋工夫2007年获国家地理标志保护，2020年再获农产品地理标志登记，保护地域覆盖福安全市。福安是“中国茶叶之乡”，坦洋工夫作为闽红名品，撑起福安红茶产业的门面，坦洋村至今仍是茶人寻访的产地地标。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家质检总局2007年第30号公告", "source_type": "政府", "source_url": "http://chinatt315.org.cn/gggs/2007-2/14/87500.html", "evidence_level": "A", "quote": "坦洋工夫地理标志产品保护范围……为福建省福安市现辖行政区域。"},
        {"source_name": "福安市农业农村局批复", "source_type": "政府", "source_url": "http://www.fjfa.gov.cn/bm/nyj/zfxxgkml/yzdgkzfxx_14172/202003/t20200326_1292200.htm", "evidence_level": "A", "quote": "坦洋工夫农产品地理标志保护具体地域：分布在辖区内的4个街道、13个镇、5个乡……总面积1871.42平方千米。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ008 寿宁高山茶 ============
{
  "product_id": "FJ008",
  "living": {
    "production_craft": {
      "content": "寿宁高山茶一山做两样：红茶走萎凋、揉捻、发酵、干燥、烘焙的路子，绿茶则摊放、杀青、干燥即成。两类工艺共用高山茶园鲜叶，按茶青老嫩各取所需，是寿宁茶农日复一日的分工。",
      "confidence": "high",
      "sources": [
        {"source_name": "地理标志特产大全·寿宁高山茶地理标志产品保护要求", "source_type": "专业数据库", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/2219/nid/21336", "evidence_level": "B", "quote": "红茶加工工艺：鲜叶→萎凋（日光或加温）→揉捻→发酵→干燥→拣剔→烘焙的工艺。绿茶加工工艺：鲜叶→摊放→杀青→干燥→拣剔的加工工艺。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "三月上旬早芽品种吐绿，寿宁高山茶陆续开园；清明谷雨是采制高峰，茶农抢在清明节前采嫩芽，摊青、杀青、炒干、烘干连轴转。春茶季是山里最热闹的时候，采完春茶，夏秋的管园与秋茶又接着排上。",
      "confidence": "medium",
      "sources": [
        {"source_name": "宁德网（寿宁：春茶飘香时 茶企制茶忙）", "source_type": "专业媒体", "source_url": "https://ndwww.cn/xspd/snxw/2023/0327/252261.shtml", "evidence_level": "C", "quote": "阳春三月……抢抓农时，采摘清明节前鲜嫩春茶……摊青、杀青、炒干、烘干、提香……经过多道工序处理后，春茶出炉。"},
        {"source_name": "寿宁县人民政府（寿宁高山茶专题页）", "source_type": "政府", "source_url": "http://www.fjsn.gov.cn/zjsn/tssn/stsn/202603/t20260317_2447198.htm", "evidence_level": "A", "quote": "海拔500米以上的山地占总面积近三分之二，年均气温13—19℃，年降水量1500—2300毫米。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {
      "content": "每年春茶开园，寿宁凤阳等地都要办开采节，茶农聚在茶园里开茶、祈福，把第一茬春茶的采摘变成山乡的仪式。春茶因此被当地人看作一年风调雨顺的兆头，开园的日子也成了茶乡的节日。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福建新闻网（寿宁凤阳开采节报道）", "source_type": "专业媒体", "source_url": "http://www.fj.chinanews.com.cn/news/2023/2023-03-29/521404.html", "evidence_level": "C", "quote": "其是以寿宁高山（海拔500-1700米）出产的本地菜茶、金牡丹、梅占等茶树嫩梢为原料。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "寿宁高山茶2014年获全国农产品地理标志登记，2020年入选全国地标保护工程，又进福建“福农优品”百品榜。寿宁是“全国重点产茶县”“中国名茶之乡”，茶园建立质量可追溯体系，高山茶是全县农业的当家产业。",
      "confidence": "high",
      "sources": [
        {"source_name": "寿宁县人民政府（寿宁高山茶专题页）", "source_type": "政府", "source_url": "http://www.fjsn.gov.cn/zjsn/tssn/stsn/202603/t20260317_2447198.htm", "evidence_level": "A", "quote": "2014年7月28日，中华人民共和国农业农村部批准对“寿宁高山茶”实施农产品地理标志登记保护（质量控制技术规范编号：AGI2014-02-1467）。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ009 福鼎白茶 ============
{
  "product_id": "FJ009",
  "living": {
    "production_craft": {
      "content": "福鼎白茶“不炒不揉”，鲜叶靠日光或室内萎凋，再低温干燥、拣剔成茶；按采摘标准分出白毫银针（单芽）、白牡丹（一芽一二叶）、寿眉（一芽二三叶或叶片），文火足干保留活性酶。这套以萎凋为核心的工艺，2021年列入国家级非遗。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省档案馆《福建非物质文化遗产｜福鼎白茶制作技艺》", "source_type": "政府", "source_url": "https://www.fj-archives.org.cn/dazx/dawh/bycg/202402/t20240226_949446.htm", "evidence_level": "A", "quote": "2021年，福鼎白茶制作技艺列入第三批国家级非物质文化遗产代表性项目名录。……该茶在制作时不炒不揉，文火足干，适度的自然氧化保留了丰富的活性酶和多酚类物质。"},
        {"source_name": "福鼎市人民政府《关于福鼎白茶申请农产品地理标志登记的受理公示》", "source_type": "政府", "source_url": "http://www.fuding.gov.cn/zwgk/tzgg/201907/t20190724_1101956.htm", "evidence_level": "A", "quote": "福建省福鼎市的桐山街道、桐城街道、山前街道、贯岭镇、前岐镇、沙埕镇……共计17个乡镇、街道、管委会。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "福鼎茶农的春茶季按等级排队：三月中下旬先采白毫银针，三月底到四月中采白牡丹，谷雨前后寿眉大量采摘，一边采一边萎凋干燥，四月中下旬新茶陆续上市；夏茶一般不采，九月再采少量秋茶，冬季清园施基肥。",
      "confidence": "medium",
      "sources": [
        {"source_name": "《福建福鼎白茶主产区地球化学特征及区划研究》（福建地质2021年第1期）", "source_type": "科研机构", "source_url": "https://wap.cnki.net/touch/web/Journal/Article/FJDZ202101004.html", "evidence_level": "B", "quote": "白茶种植区海拔在200～800m以下，属中亚热带海洋性季风气候，东南面海，西靠太姥山脉……区域内年气温为17.6～18.9℃。"},
        {"source_name": "福鼎市人民政府《气象气候》", "source_type": "政府", "source_url": "http://www.fuding.gov.cn/zjfd/zrdl/qxqh/202111/t20211126_1558396.htm", "evidence_level": "A", "quote": "福鼎地处东南沿海，属中亚热带海洋性季风气候。气候温和，雨量适中……常年年平均气温19.2℃。"}
      ],
      "reason": None
    },
    "food": {
      "content": "福鼎民间把白茶当“能喝的收藏”：新茶清香，陈放三年转药香，七年以上更醇，人称“一年茶，三年药，七年宝”。当地人喝茶不分场合，家中待客、饭后解腻都离不开一壶白茶，“茶哥米弟”是福鼎人挂在嘴边的话。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福建省档案馆《福建非物质文化遗产｜福鼎白茶制作技艺》", "source_type": "政府", "source_url": "https://www.fj-archives.org.cn/dazx/dawh/bycg/202402/t20240226_949446.htm", "evidence_level": "A", "quote": "如今，坊间流传白茶有“一年茶，三年药，七年宝”之称。"},
        {"source_name": "福建网络广播电视台《宁德福鼎举办第五届中国白茶始祖文化节》", "source_type": "专业媒体", "source_url": "https://www.fjtv.net/folder335/2024-08-10/6063566.html", "evidence_level": "B", "quote": "随着存储年份增长，“一年茶，三年养，七年宝”的珍贵特性被世人瞩目。"}
      ],
      "reason": None
    },
    "culture": {
      "content": "太姥山是白茶的发源地：相传尧时蓝姑采鸿雪洞绿雪芽制茶，治愈了麻疹流行的乡民，被尊为“太姥娘娘”“白茶始祖”。每年农历七月初七，福鼎都办中国白茶始祖文化节，茶人齐聚太姥山祭拜，太姥祭典延续至今。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省档案馆《福建非物质文化遗产｜福鼎白茶制作技艺》", "source_type": "政府", "source_url": "https://www.fj-archives.org.cn/dazx/dawh/bycg/202402/t20240226_949446.htm", "evidence_level": "A", "quote": "相传尧时，有一女子在太姥山下种蓝，人称蓝母。时年麻疹流行，蓝母于太姥山鸿雪洞寻绿雪芽制作白茶以治患者，麻疫遂平。尧帝感其德，敕封为“太母”，民间称为“太姥娘娘”。"},
        {"source_name": "福建网络广播电视台《宁德福鼎举办第五届中国白茶始祖文化节》", "source_type": "专业媒体", "source_url": "https://www.fjtv.net/folder335/2024-08-10/6063566.html", "evidence_level": "B", "quote": "农历七月初七，是太姥娘娘羽化成仙纪念日，8月10日上午，第五届中国白茶始祖文化节暨白茶技艺非遗传承礼在宁德福鼎市太姥娘娘文化广场举行。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "福鼎白茶2004年起实施地理标志保护，又注册证明商标、登记农产品地标，保护覆盖全市17个乡镇街道；2023年全县茶园36.2万亩，茶叶总产3.2万吨，其中白茶2.3万吨，白茶是福鼎当之无愧的第一产业。",
      "confidence": "high",
      "sources": [
        {"source_name": "地理标志特产大全（福鼎白茶注册保护信息）", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/gg/id/638", "evidence_level": "A", "quote": "批准自2004年6月16日起对福鼎白茶实施原产地域保护（公告2004年第72号）。"},
        {"source_name": "福建网络广播电视台《宁德福鼎举办第五届中国白茶始祖文化节》", "source_type": "专业媒体", "source_url": "https://www.fjtv.net/folder335/2024-08-10/6063566.html", "evidence_level": "B", "quote": "2023年，福鼎市茶园面积36.2万亩，可采摘面积约30.5万亩，实现茶叶总产量3.2万吨，其中白茶产量2.3万吨。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ010 安溪铁观音 ============
{
  "product_id": "FJ010",
  "living": {
    "production_craft": {
      "content": "铁观音讲究“开面采”，采驻芽小开面至中开面二至四叶；鲜叶晒青、晾青后反复摇青摊放，摇到叶缘氧化出“绿叶红镶边”，再炒青、包揉、干燥，十道工序连续三十六小时。乌龙茶制作技艺（铁观音）2008年列入国家级非遗。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省农业农村厅《安溪铁观音：“三茶”统筹谋新篇》", "source_type": "政府", "source_url": "https://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202403/t20240321_6417971.htm", "evidence_level": "A", "quote": "铁观音“绿叶红镶边”是因为在制茶过程有独特的“做青”工艺……传统工艺中，茶树上采下来的鲜叶一般需要经过4次摇青。"},
        {"source_name": "农民日报国际《美如观音重如铁》", "source_type": "政府", "source_url": "https://cnafun.moa.gov.cn/zt/gjcr/202005/t20200513_6343916.html", "evidence_level": "A", "quote": "安溪土质肥厚，年平均温度19~21℃，年降水量1600毫米……铁观音一年四次采制。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "铁观音一年采四季：谷雨到立夏采春茶，夏至到小暑采夏茶，立秋到处暑采暑茶，秋分到寒露采秋茶；春秋两季占了全年产量的八成。春茶季茶农白天采青、夜里摇青做青，是安溪最紧张的农时。",
      "confidence": "high",
      "sources": [
        {"source_name": "农民日报国际《美如观音重如铁》", "source_type": "政府", "source_url": "https://cnafun.moa.gov.cn/zt/gjcr/202005/t20200513_6343916.html", "evidence_level": "A", "quote": "铁观音一年四次采制，谷雨至立夏采制的为春茶……秋分至寒露采制的为秋茶。春秋两季是铁观音最重要的茶季。"},
        {"source_name": "农博数据中心《安溪铁观音加工工艺》", "source_type": "专业数据库", "source_url": "http://shuju.aweb.com.cn/technology/2008/0923/102516480.shtml", "evidence_level": "C", "quote": "3月下旬萌芽，一年分四季采制，谷雨至立夏(4月中下旬一5月上旬)为春茶，产量占全年总产量的40—45％。"}
      ],
      "reason": None
    },
    "food": {
      "content": "安溪人泡铁观音自成一套：洗杯、落茶、冲茶、刮沫、倒茶、点茶、看茶、品茶，八道程序下来，茶汤金黄，兰花香里带“观音韵”；“绿叶红镶边，七泡有余香”是茶客对它的评价，功夫茶泡法因此风行闽南。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省农业农村厅《安溪铁观音：“三茶”统筹谋新篇》", "source_type": "政府", "source_url": "https://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202403/t20240321_6417971.htm", "evidence_level": "A", "quote": "冲泡茶艺按其程序可分为八道：1.洗杯……8.品茶：乘热细啜，先闻其香，后尝其味，边啜边闻，浅斟细饮。"}
      ],
      "reason": None
    },
    "culture": {
      "content": "铁观音的名字里藏着两个传说：清雍正年间魏荫“观音托梦”发现奇茶，乾隆年间王士让献茶、乾隆赐名“铁观音”。茶乡至今保留“喊山开茶”民俗，斗茶、敬茶、茶艺融入日常；2022年，安溪铁观音茶文化系统被联合国粮农组织认定为全球重要农业文化遗产。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省农业农村厅《安溪铁观音：“三茶”统筹谋新篇》", "source_type": "政府", "source_url": "https://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202403/t20240321_6417971.htm", "evidence_level": "A", "quote": "2022年，福建省安溪铁观音茶文化系统被联合国粮农组织认定为全球重要农业文化遗产。……“铁观音”一名从何而来……“观音托梦说”。"},
        {"source_name": "农业农村部国际交流服务中心《当农业文化遗产遇上“国际茶日”｜福建安溪铁观音茶文化系统》", "source_type": "科研机构", "source_url": "http://www.cicos.agri.cn/tpxw/202005/t20200511_7385727.htm", "evidence_level": "A", "quote": "茶已渗透到茶乡人民的生产生活中，形成了独特的斗茶、敬茶、茶艺等茶文化习俗、礼俗。……铁观音有两个传说为茶乡人民所津津乐道，分别是“魏说”和“王说”。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "铁观音是安溪的立县产业：全县茶园约60万亩，约八成人口围着茶转，建有中国茶都等茶叶集散中心，茶机械与茶包装制造占据全国大半市场；“安溪铁观音”列入中欧地理标志协定首批保护名录，2022年再获全球重要农业文化遗产，一叶带百业。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省农业农村厅《安溪铁观音：“三茶”统筹谋新篇》", "source_type": "政府", "source_url": "https://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202403/t20240321_6417971.htm", "evidence_level": "A", "quote": "目前，安溪全县有茶园面积约60万亩，约八成人口从事与茶有关的产业。"},
        {"source_name": "农业农村部国际交流服务中心《当农业文化遗产遇上“国际茶日”｜福建安溪铁观音茶文化系统》", "source_type": "科研机构", "source_url": "http://www.cicos.agri.cn/tpxw/202005/t20200511_7385727.htm", "evidence_level": "A", "quote": "铁观音是安溪农民的主要生计来源，全县120万人口中有80万人因茶产业受益，农民收入的56%来自茶产业。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ011 永春佛手茶 ============
{
  "product_id": "FJ011",
  "living": {
    "production_craft": {
      "content": "永春佛手按乌龙茶古法制茶：鲜叶晒青、摇青，让叶片走水发酵，再杀青、揉捻、烘焙，做成条索紧结、带佛手柑般清香的半发酵茶。核心产地在苏坑、玉斗一带海拔600至900米的高山茶园。",
      "confidence": "high",
      "sources": [
        {"source_name": "泉州市人民政府网·永春佛手", "source_type": "政府", "source_url": "https://www.quanzhou.gov.cn/gastronomy/ch/sqsm/ctsc/202412/t20241213_3116828.htm", "evidence_level": "A", "quote": "主产于永春县苏坑、玉斗、坑仔口、锦斗和桂洋等乡镇海拔600米至900米高山上。"},
        {"source_name": "国家质检总局2006年第203号公告", "source_type": "政府", "source_url": "http://chinatt315.org.cn/gggs/2006-12/28/87372.html", "evidence_level": "A", "quote": "保护区域内海拔400米至800米，坡度小于25度，土壤为pH4.5至6.0的红壤。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "春分前后，永春佛手开园，苏坑等乡镇还要办开茶节；春茶三到五月是主采季，茶农采青、摇青、杀青、烘焙连轴转；六七月采夏茶，九月十月采秋茶，茶季从春天一路排到深秋，冬季再封园养地。",
      "confidence": "medium",
      "sources": [
        {"source_name": "中国新闻网（乡约福建）", "source_type": "专业媒体", "source_url": "http://www.chinanews.com.cn/sh/2023/03-21/9975892.shtml", "evidence_level": "C", "quote": "作为佛手茶核心产区，福建省永春县苏坑镇21日举办首届佛手开茶节。"},
        {"source_name": "泉州市人民政府网·永春佛手", "source_type": "政府", "source_url": "https://www.quanzhou.gov.cn/gastronomy/ch/sqsm/ctsc/202412/t20241213_3116828.htm", "evidence_level": "A", "quote": "主产于永春县苏坑、玉斗、坑仔口、锦斗和桂洋等乡镇海拔600米至900米高山上。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {
      "content": "2023年，苏坑镇办了首届佛手开茶节，茶农在春分时节聚首开园，把开采春茶变成茶乡的节日。佛手茶三百多年的种植史，也就这样在一代代茶农的开园、制茶中传了下来。",
      "confidence": "medium",
      "sources": [
        {"source_name": "中国新闻网（乡约福建）", "source_type": "专业媒体", "source_url": "http://www.chinanews.com.cn/sh/2023/03-21/9975892.shtml", "evidence_level": "C", "quote": "作为佛手茶核心产区，福建省永春县苏坑镇21日举办首届佛手开茶节。"},
        {"source_name": "海峡都市报", "source_type": "专业媒体", "source_url": "https://hxdsb.fjdaily.com/pad/con/202303/22/content_260100.html", "evidence_level": "C", "quote": "苏坑是它的核心产区，已有300多年的种植历史。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "永春佛手2006年获国家地理标志保护，又进全国名特优新农产品名录；核心区苏坑镇有佛手茶园上万亩、茶叶初制加工厂一百多家。高山茶园与加工厂连片分布，佛手茶是永春茶产业的当家品种。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家质检总局2006年第203号公告", "source_type": "政府", "source_url": "http://chinatt315.org.cn/gggs/2006-12/28/87372.html", "evidence_level": "A", "quote": "保护区域内海拔400米至800米，坡度小于25度，土壤为pH4.5至6.0的红壤。"},
        {"source_name": "海峡都市报", "source_type": "专业媒体", "source_url": "https://hxdsb.fjdaily.com/pad/con/202303/22/content_260100.html", "evidence_level": "C", "quote": "苏坑是它的核心产区，已有300多年的种植历史。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ012 华安铁观音 ============
{
  "product_id": "FJ012",
  "living": {
    "production_craft": {
      "content": "华安铁观音一年可采五季：春、夏、暑、秋外加冬片。因海拔较安溪低、气温偏暖，春茶比安溪早上市十五到二十天；当地茶厂首创空调制茶工艺，用控温控湿化解盛夏做青难题，冬季再采一季冬片茶。",
      "confidence": "high",
      "sources": [
        {"source_name": "华安县人民政府（香飘万里——华安铁观音）", "source_type": "政府", "source_url": "http://www.huaan.gov.cn/cms/siteresource/article.shtml?siteId=60426900666720001&id=250287971135260003", "evidence_level": "A", "quote": "华安一年可产“五季”茶叶，形成了比安溪县早上市15--20天的春季“明前茶”和迟上市的冬季“冬片茶”。"},
        {"source_name": "茶联网（特色华安铁观音的制作与品饮）", "source_type": "行业协会", "source_url": "http://m.marroptt.com/168tea/view3.php?id=4946", "evidence_level": "C", "quote": "2月下旬萌芽，4月上旬开采，一年可采制春、夏、暑、秋、冬五季。茶叶品质以春、秋茶为最好，秋茶香气最浓。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "华安茶季从四月排到冬：四月上旬开采春茶，初夏做夏茶，盛夏暑茶靠空调工艺，深秋采秋茶，入冬再采冬片。全县五千七百多家茶叶初制加工厂散落在各镇，仙都镇还建起万亩绿色有机茶基地，家家户户围着茶园转。",
      "confidence": "medium",
      "sources": [
        {"source_name": "华安县人民政府（香飘万里——华安铁观音）", "source_type": "政府", "source_url": "http://www.huaan.gov.cn/cms/siteresource/article.shtml?siteId=60426900666720001&id=250287971135260003", "evidence_level": "A", "quote": "华安一年可产“五季”茶叶，形成了比安溪县早上市15--20天的春季“明前茶”和迟上市的冬季“冬片茶”。"},
        {"source_name": "福州大学新闻网（茶香出深山）", "source_type": "高校", "source_url": "https://news.fzu.edu.cn/info/1014/5544.htm", "evidence_level": "C", "quote": "茶园位于华安县仙都镇高村村深山旮旯处，海拔600多米，周围树林茂密，长年无雪，偶有微霜，时常云雾缭绕。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "华安铁观音2010年注册地理标志证明商标，后又获中国驰名商标，产地覆盖全县十个乡镇；2020年政府函件显示全县铁观音种植约十万亩。从华丰、仙都到湖林，茶园与茶厂构成华安最醒目的产业底色。",
      "confidence": "high",
      "sources": [
        {"source_name": "华安县人民政府函（华政函〔2020〕15号）", "source_type": "政府", "source_url": "http://www.huaan.gov.cn/cms/siteresource/article.shtml?id=60500617990660000&siteId=60426900666720001", "evidence_level": "A", "quote": "2010年8月，“华安铁观音”商标经国家工商行政管理总局商标局核准注册（注册号为7401817）……被认定为驰名商标、茶叶类地理标志证明商标。"},
        {"source_name": "华安县人民政府（香飘万里——华安铁观音）", "source_type": "政府", "source_url": "http://www.huaan.gov.cn/cms/siteresource/article.shtml?siteId=60426900666720001&id=250287971135260003", "evidence_level": "A", "quote": "华安一年可产“五季”茶叶。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ013 平和白芽奇兰 ============
{
  "product_id": "FJ013",
  "living": {
    "production_craft": {
      "content": "白芽奇兰做青细致：贮青、萎凋后反复做青，再杀青、揉捻，经初烘、初包揉、复烘、复包揉、足干，十道工序环环相扣。鲜叶靠手工提手采，保持芽叶完整，一年修剪一次，是平和高山茶区的精细活。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）《平和白芽奇兰地理标志产品保护要求》", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/68/nid/21338", "evidence_level": "A", "quote": "海拔500～1200m之间，坡度＜25°……微酸性红壤、黄壤、沙壤土、砂砾壤土、棕色森林土……pH值在5.0～6.0之间。"},
        {"source_name": "平和白芽奇兰农产品地理标志质量控制技术规范", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/68/nid/2755", "evidence_level": "A", "quote": "大芹山是平和白芽奇兰的主产茶区，为漳州第一高峰，海拔1544.8m，这里丘陵、河谷、盆地错落，山峦起伏，林竹茂密，终年云雾缭绕。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "平和的白芽奇兰春茶四月下旬采到五月初，越冬芽三月底萌发，一年抽芽梢四轮左右，夏秋茶随轮次采制。大芹山海拔一千五百多米，茶农沿山种茶，春茶季是最忙的一轮，采完还要接着管园、修剪。",
      "confidence": "medium",
      "sources": [
        {"source_name": "白芽奇兰茶品种资料（中国农业科学院茶叶研究所品种数据转载）", "source_type": "科研机构", "source_url": "https://baike.baidu.com/item/%E7%99%BD%E8%8A%BD%E5%A5%87%E5%85%B0%E8%8C%B6/10732547", "evidence_level": "C", "quote": "越冬芽萌发于3月下旬初，4月下旬末至5月上旬初可采制，平和年芽梢可抽长四轮左右，有效生长期215－230天。"},
        {"source_name": "平和白芽奇兰农产品地理标志质量控制技术规范", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/68/nid/2755", "evidence_level": "A", "quote": "大芹山是平和白芽奇兰的主产茶区，为漳州第一高峰，海拔1544.8m。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "白芽奇兰获国家地理标志保护与农产品地理标志双重登记；主产区大芹山是漳州第一高峰，海拔1544.8米，山地茶园与森林交错。白芽奇兰是平和县继蜜柚之后又一块农产品地标招牌，撑起平和茶产业的半壁江山。",
      "confidence": "high",
      "sources": [
        {"source_name": "平和白芽奇兰农产品地理标志质量控制技术规范", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/68/nid/2755", "evidence_level": "A", "quote": "大芹山是平和白芽奇兰的主产茶区，为漳州第一高峰，海拔1544.8m，这里丘陵、河谷、盆地错落，山峦起伏，林竹茂密，终年云雾缭绕，溪流潺潺。"},
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）《平和白芽奇兰地理标志产品保护要求》", "source_type": "政府", "source_url": "https://sinogi.cn/wap/index.php/product/zxshow/id/68/nid/21338", "evidence_level": "A", "quote": "海拔500～1200m之间，坡度＜25°。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ014 诏安八仙茶 ============
{
  "product_id": "FJ014",
  "living": {
    "production_craft": {
      "content": "八仙茶一年能采制六次，是少见的“多季茶”：晾青、晒青后手工做青、摇青，二百多度的锅温杀青，再揉捻、烘干、剔除黄片茶梗，最后烘焙提香、复焙定味。茶苗一年一剪、重施有机肥，白洋乡是它的选育原产地。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建日报（诏安县人民政府网站转载）《诏安八仙茶：从深山走向世界的「金叶子」》", "source_type": "政府", "source_url": "http://www.zhaoan.gov.cn/cms/html/zaxrmzf/2026-06-29/2061283879.html", "evidence_level": "A", "quote": "诏安县八仙茶进入夏茶采摘季……'八仙茶色泽油润，香气高锐持久……且一年可采制6次。'"},
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）——诏安八仙茶保护要求", "source_type": "政府", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/2938/nid/22547", "evidence_level": "A", "quote": "海拔高度50～1000m，森林覆盖率63%以上，以低丘红壤为主，微酸性，土壤层厚度＞50cm，有机质含量＞2.0%，富含硒元素。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "诏安茶农几乎全年都在采茶：四月就有早春茶上市，春茶采完接夏茶，入秋又采秋茶，一年六轮采制把茶季排得满满当当。秀篆等乡镇的茶园里，采青、做青、烘焙的活计轮番上阵，茶厂跟着茶季连轴转。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建日报（诏安县人民政府网站转载）《诏安八仙茶：从深山走向世界的「金叶子」》", "source_type": "政府", "source_url": "http://www.zhaoan.gov.cn/cms/html/zaxrmzf/2026-06-29/2061283879.html", "evidence_level": "A", "quote": "诏安县八仙茶进入夏茶采摘季……且一年可采制6次。"},
        {"source_name": "漳州新闻网《诏安八仙茶首次走出国门》", "source_type": "专业媒体", "source_url": "http://www.zznews.cn/system/2024/05/24/031240289.shtml", "evidence_level": "C", "quote": "诏安八仙茶生长快、采摘期长，每年4月前后就有早春茶上市。"}
      ],
      "reason": None
    },
    "food": {
      "content": "八仙茶汤色橙黄明亮，香气高锐持久，是闽南人日常泡饮的乌龙茶。因采摘期长、产量稳，它既上得了茶桌待客，也走进了街边茶馆的日常，是诏安人杯中最常见的一味。",
      "confidence": "medium",
      "sources": [
        {"source_name": "福建日报（诏安县人民政府网站转载）《诏安八仙茶：从深山走向世界的「金叶子」》", "source_type": "政府", "source_url": "http://www.zhaoan.gov.cn/cms/html/zaxrmzf/2026-06-29/2061283879.html", "evidence_level": "A", "quote": "八仙茶色泽油润，香气高锐持久。"}
      ],
      "reason": None
    },
    "culture": {"content": None, "confidence": None, "sources": [], "reason": "weak_evidence"},
    "industry": {
      "content": "八仙茶1994年被审定为国家级茶树新品种，后获国家地理标志保护；2024年，诏安八仙茶首次走出国门。从白洋乡选育地一路扩到全县，八仙茶成为诏安茶产业从山区走向海外的一张牌。",
      "confidence": "high",
      "sources": [
        {"source_name": "国家知识产权局地理标志产品认定公告（第640号）——诏安八仙茶保护要求", "source_type": "政府", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/2938/nid/22547", "evidence_level": "A", "quote": "海拔高度50～1000m，森林覆盖率63%以上。"},
        {"source_name": "漳州新闻网《诏安八仙茶首次走出国门》", "source_type": "专业媒体", "source_url": "http://www.zznews.cn/system/2024/05/24/031240289.shtml", "evidence_level": "C", "quote": "诏安八仙茶生长快、采摘期长，每年4月前后就有早春茶上市。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ015 福州茉莉花茶 ============
{
  "product_id": "FJ015",
  "living": {
    "production_craft": {
      "content": "福州茉莉花茶的功夫在“窨”：茉莉花在盛夏午后高温时段采下未绽花苞，夜里花朵自然开放，与绿茶茶坯一层花一层茶拌和，让茶吸足花香。传统工艺至少四窨一提，讲究的做到九窨，最后“见茶不见花”，花香却留在茶里。",
      "confidence": "high",
      "sources": [
        {"source_name": "福州市政府·福州茉莉花茶地理标志保护管理细则", "source_type": "政府", "source_url": "https://law.foodmate.net/mobile/index.php?moduleid=23&itemid=171033", "evidence_level": "A", "quote": "按照福州茉莉花茶传统工艺经四窨一提及以上加工制作而成。"},
        {"source_name": "福州市农业农村局·央视关注报道", "source_type": "政府", "source_url": "https://nyj.fuzhou.gov.cn/xxgk/gzdt/tpxw/202506/t20250623_5037428.htm", "evidence_level": "A", "quote": "花期是每年的5月到11月，但最佳采收时节是在温度最高的盛夏时期。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "三月采茶做坯，七月寻花、九月成茶。盛夏午后，花农顶着高温采花，入夜后制茶师傅伺花、拌和、通花、烘焙，一窨就是一整夜；七月到九月，福州的花田与茶厂连轴转，是花茶季最忙的时节。",
      "confidence": "high",
      "sources": [
        {"source_name": "中国日报·活力中国调研行", "source_type": "专业媒体", "source_url": "http://cn.chinadaily.com.cn/a/202608/20/WS6a866478a3105d3d7a27bdf9.html", "evidence_level": "C", "quote": "三月采茶、七月寻花、九月成茶。"},
        {"source_name": "福州市农业农村局·央视关注报道", "source_type": "政府", "source_url": "https://nyj.fuzhou.gov.cn/xxgk/gzdt/tpxw/202506/t20250623_5037428.htm", "evidence_level": "A", "quote": "花期是每年的5月到11月，但最佳采收时节是在温度最高的盛夏时期。"}
      ],
      "reason": None
    },
    "food": {
      "content": "茉莉花茶是福州人的“口粮茶”：街巷茶馆、家中待客，一壶茉莉花茶就能坐下聊半天。冰心在《茶的故乡和我故乡的茉莉花茶》里说它是故乡的味道；三伏天里，花茶清香解暑，福州人把它喝成了城市记忆。",
      "confidence": "medium",
      "sources": [
        {"source_name": "人民网福建频道《福州：茉莉花再开，茶香溢中外》", "source_type": "专业媒体", "source_url": "https://fj.people.com.cn/n2/2022/1210/c181466-40226624.html", "evidence_level": "B", "quote": "“我的故乡福建既是茶乡，又是茉莉花茶的故乡。”作家冰心曾在《茶的故乡和我故乡的茉莉花茶》中动情地写道。"},
        {"source_name": "福州新闻网《向世界敬一杯“福州茶”》", "source_type": "专业媒体", "source_url": "https://news.fznews.com.cn/fzxw/20250905/Rr0cf03342.shtml", "evidence_level": "B", "quote": "在福州，遍布大街小巷的茶馆里，你都能闻到那股茉莉香。"}
      ],
      "reason": None
    },
    "culture": {
      "content": "福州是“世界茉莉花茶发源地”，民谣唱“闽江边口是奴家，门前一田茉莉花”；2014年福州茉莉花种植与茶文化系统列入全球重要农业文化遗产，2022年窨制工艺又随“中国传统制茶技艺”入选人类非遗，这杯花茶还曾出现在尼克松访华的外交场合。",
      "confidence": "high",
      "sources": [
        {"source_name": "人民网福建频道《福州：茉莉花再开，茶香溢中外》", "source_type": "专业媒体", "source_url": "https://fj.people.com.cn/n2/2022/1210/c181466-40226624.html", "evidence_level": "B", "quote": "“福州茉莉花种植与茶文化系统”被列为全球重要农业文化遗产。2014年11月，花茶制作技艺(茉莉花茶窨制工艺)被列入第四批国家非物质文化遗产代表性项目名录。"},
        {"source_name": "福州新闻网《向世界敬一杯“福州茶”》", "source_type": "专业媒体", "source_url": "https://news.fznews.com.cn/fzxw/20250905/Rr0cf03342.shtml", "evidence_level": "B", "quote": "2014年，福州茉莉花与茶文化系统入选“全球重要农业文化遗产”；2022年，发源于福州的茉莉花茶窨制工艺……成功跻身世界非遗之列。……毛主席会见美国总统尼克松时，喝的是福州茉莉花茶。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "福州茉莉花茶已做成百亿产业：2025年全产业链产值118亿元，约占福建省的七成七，产量2.2万吨；全市茶企上百家，直接带动2.6万户花农、4.2万户茶农增收，江边花田与高山茶园的循环布局至今未变。",
      "confidence": "high",
      "sources": [
        {"source_name": "中国日报网《双遗茉莉香京春启新章》", "source_type": "专业媒体", "source_url": "https://cnews.chinadaily.com.cn/a/202604/16/WS69e0a2e3a310942cc49a7f6d.html", "evidence_level": "B", "quote": "2025年，全产业链产值达118亿元，占福建省茉莉花茶全产业链产值的77.4%，产量2.2万吨，占全省91.67%……直接惠及2.6万户花农、4.2万户茶农。"},
        {"source_name": "中国农业农村信息网·福州茉莉花茶", "source_type": "政府", "source_url": "http://www.agri.cn/zx/zxfb/202404/t20240416_8625243.htm", "evidence_level": "A", "quote": "在江边沙洲种植茉莉花，在海拔600〜1000米的高山上发展茶叶生产。"}
      ],
      "reason": None
    }
  }
},
# ============ FJ016 漳平水仙茶 ============
{
  "product_id": "FJ016",
  "living": {
    "production_craft": {
      "content": "漳平水仙是乌龙茶里唯一的紧压茶：鲜叶晒青、晾青、做青、杀青、揉捻后，压进模具定型成小方饼，再炭焙成茶。茶农“看青做青、看天做青”，技艺之精让它成为乌龙茶家族里独树一帜的“水仙茶饼”。",
      "confidence": "high",
      "sources": [
        {"source_name": "地理标志特产大全·漳平水仙茶地理标志产品保护要求", "source_type": "专业数据库", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/960/nid/21320", "evidence_level": "B", "quote": "漳平水仙茶饼制作工艺流程为：鲜叶→晒青→晾青→做青（摇青与晾青交替）→杀青→揉捻→造型（含造型与定型）→烘焙。"},
        {"source_name": "中国非物质文化遗产网（乌龙茶制作技艺·漳平水仙茶制作技艺）", "source_type": "博物馆/文化机构", "source_url": "https://www.ihchina.cn/art/detail/id/23784.html", "evidence_level": "A", "quote": "该地处于南亚热带山地农业区，气候温和，光照充足，雨量充沛，78.1%的森林覆盖提供的肥厚腐殖层与红壤、黄壤形成特定的土层结构。"}
      ],
      "reason": None
    },
    "labor": {
      "content": "漳平水仙的开采看茶蓬：春茶等到一两成新梢达标就开园，一年采四五轮，春茶鲜爽、秋茶香高，茶农说“春水秋香”。压模、定型、烘焙跟着采制走，南洋、双洋的茶季从春排到初冬，茶园管理见缝插针。",
      "confidence": "medium",
      "sources": [
        {"source_name": "地理标志特产大全·漳平水仙茶地理标志产品保护要求", "source_type": "专业数据库", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/960/nid/21320", "evidence_level": "B", "quote": "春季当茶蓬上有10%～15%的新梢达到采摘标准……即为开采期。"},
        {"source_name": "福建省农业农村厅（全国名特优新农产品专栏）", "source_type": "政府", "source_url": "http://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202212/t20221212_6077339.htm", "evidence_level": "A", "quote": "漳平水仙茶的主要产区位于福建省龙岩市漳平市南洋镇、双洋镇等。"}
      ],
      "reason": None
    },
    "food": {"content": None, "confidence": None, "sources": [], "reason": "no_reliable_source"},
    "culture": {
      "content": "2022年11月，漳平水仙茶传统制作技艺随“中国传统制茶技艺及其相关习俗”入选联合国教科文组织非物质文化遗产名录，让这枚小小的水仙茶饼从闽西山区走进世界视野，成为漳平人引以为傲的地方名片。",
      "confidence": "high",
      "sources": [
        {"source_name": "中国非物质文化遗产网（乌龙茶制作技艺·漳平水仙茶制作技艺）", "source_type": "博物馆/文化机构", "source_url": "https://www.ihchina.cn/art/detail/id/23784.html", "evidence_level": "A", "quote": "漳平水仙茶制作技艺……2022年11月入选联合国教科文组织人类非物质文化遗产代表作名录。"}
      ],
      "reason": None
    },
    "industry": {
      "content": "漳平水仙获国家地理标志保护与全国名特优新农产品认定，主产南洋、双洋等九个乡镇；漳平是“全国重点产茶县”，建有全国绿色食品原料（茶叶）标准化生产基地，水仙茶饼远销各地，撑起漳平茶产业的特色板块。",
      "confidence": "high",
      "sources": [
        {"source_name": "福建省农业农村厅（全国名特优新农产品专栏）", "source_type": "政府", "source_url": "http://nynct.fujian.gov.cn/ztzl/fsfsfnyp/202212/t20221212_6077339.htm", "evidence_level": "A", "quote": "漳平水仙茶的主要产区位于福建省龙岩市漳平市南洋镇、双洋镇等。"},
        {"source_name": "地理标志特产大全·漳平水仙茶地理标志产品保护要求", "source_type": "专业数据库", "source_url": "https://www.sinogi.cn/wap/index.php/product/zxshow/id/960/nid/21320", "evidence_level": "B", "quote": "产地范围：福建省漳平市南洋乡、双洋镇、赤水镇、新桥镇、吾祠乡、灵地乡、溪南镇、象湖镇、永福镇等9个乡镇。"}
      ],
      "reason": None
    }
  }
}
]
