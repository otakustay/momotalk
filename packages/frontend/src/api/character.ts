export enum CharacterOrganization {
    Abydos = 'Abydos', // 阿拜多斯
    Arius = 'Arius', // 阿里乌斯
    Etc = 'Etc', // 其它
    Gehenna = 'Gehenna', // 格黑娜
    Hyakkiyako = 'Hyakkiyako', // 百鬼夜行
    Millennium = 'Millennium', // 千年
    RedWinter = 'RedWinter', // 赤冬
    ShanHaiJing = 'Shanhaijing', // 山海经
    Srt = 'SRT', // SRT
    Trinity = 'Trinity', // 圣三一
    Valkyrie = 'Valkyrie', // 瓦尔基里
}

export interface CharacterInfo {
    id: number;
    name: string;
    message?: string;
    organization: CharacterOrganization;
}

export default {
    list: async (): Promise<CharacterInfo[]> => {
        return [
            {
                id: 10000,
                name: '爱露',
                organization: CharacterOrganization.Gehenna,
                message: '哈哈，真是个明智的选择啊。\n老师。',
            },
            {
                id: 10001,
                name: '艾米',
                organization: CharacterOrganization.Millennium,
                message: '怎样才可以更有效率地战斗呢……？',
            },
            {
                id: 10002,
                name: '晴奈',
                organization: CharacterOrganization.Gehenna,
                message: '和我一起去探访美食世界吧~',
            },
            {
                id: 10003,
                name: '日富美',
                organization: CharacterOrganization.Trinity,
                message: '以后就和老师一起……\n我会加油的！',
            },
            {
                id: 10004,
                name: '日奈',
                organization: CharacterOrganization.Gehenna,
                message: '虽然很麻烦，但本职工作还是要做的。\n因为那是我的责任。',
            },
            {
                id: 10005,
                name: '星野',
                organization: CharacterOrganization.Abydos,
                message: '今天都没能好好睡午觉……\n算了，没办法咯。',
            },
            {
                id: 10006,
                name: '伊织',
                organization: CharacterOrganization.Gehenna,
                message: '违反规章的家伙们，不可饶恕！',
            },
            {
                id: 10007,
                name: '真纪',
                organization: CharacterOrganization.Millennium,
                message: '嚎叫吧，我的艺术之魂！',
            },
            {
                id: 10008,
                name: '妮露',
                organization: CharacterOrganization.Millennium,
                message: '做好准备了吗，我可不会手下留情！',
            },
            {
                id: 10009,
                name: '泉',
                organization: CharacterOrganization.Gehenna,
                message: '这个世界上有好~多好吃的哦！',
            },
            {id: 10010, name: '白子', organization: CharacterOrganization.Abydos, message: '需要我的帮助吗？'},
            {
                id: 10011,
                name: '瞬',
                organization: CharacterOrganization.ShanHaiJing,
                message: '在这儿乖乖等了很久吗？\n真是个好孩子~',
            },
            {
                id: 10012,
                name: '堇',
                organization: CharacterOrganization.Millennium,
                message: '那我们开始今天的训练吧？',
            },
            {id: 10013, name: '鹤城', organization: CharacterOrganization.Trinity, message: '狩猎的时间到了！'},
            {id: 13000, name: '茜', organization: CharacterOrganization.Millennium, message: ''},
            {id: 13001, name: '千世', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {id: 13002, name: '明里', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 13003, name: '莲见', organization: CharacterOrganization.Trinity, message: ''},
            {id: 13004, name: '野宫', organization: CharacterOrganization.Abydos, message: '终于轮到我出场了！'},
            {id: 13005, name: '佳代子', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 13006, name: '睦月', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 13007, name: '纯子', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 13008, name: '芹香', organization: CharacterOrganization.Abydos, message: ''},
            {id: 13009, name: '椿', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {id: 13010, name: '优香', organization: CharacterOrganization.Millennium, message: ''},
            {id: 16000, name: '春香', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 16001, name: '明日奈', organization: CharacterOrganization.Millennium, message: ''},
            {id: 16002, name: '琴里', organization: CharacterOrganization.Millennium, message: ''},
            {id: 16003, name: '铃美', organization: CharacterOrganization.Trinity, message: ''},
            {id: 16004, name: '菲娜', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {id: 20000, name: '响', organization: CharacterOrganization.Millennium, message: '有没有需要改造的东西？'},
            {id: 20001, name: '花凛', organization: CharacterOrganization.Millennium, message: '谨遵主人旨意。'},
            {
                id: 20002,
                name: '纱绫',
                organization: CharacterOrganization.ShanHaiJing,
                message: '实验这种事，就放心交给小爷我吧！',
            },
            {id: 23000, name: '爱理', organization: CharacterOrganization.Trinity, message: ''},
            {id: 23001, name: '风香', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 23002, name: '花江', organization: CharacterOrganization.Trinity, message: ''},
            {id: 23003, name: '晴', organization: CharacterOrganization.Millennium, message: ''},
            {id: 23004, name: '歌原', organization: CharacterOrganization.Millennium, message: ''},
            {id: 23005, name: '绫音', organization: CharacterOrganization.Abydos, message: ''},
            {id: 26000, name: '千夏', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 26001, name: '小玉', organization: CharacterOrganization.Millennium, message: ''},
            {id: 26002, name: '朱莉', organization: CharacterOrganization.Gehenna, message: ''},
            {id: 26003, name: '芹娜', organization: CharacterOrganization.Trinity, message: ''},
            {id: 26004, name: '志美子', organization: CharacterOrganization.Trinity, message: ''},
            {id: 26005, name: '好美', organization: CharacterOrganization.Trinity, message: ''},
            {id: 20003, name: '真白', organization: CharacterOrganization.Trinity, message: '“还有哪里需要正义吗？”'},
            {id: 10014, name: '泉奈', organization: CharacterOrganization.Hyakkiyako, message: '一切都是为了主公！'},
            {id: 23006, name: '静子', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {
                id: 10015,
                name: '爱丽丝',
                organization: CharacterOrganization.Millennium,
                message: '我一直在等待着你的呼唤。',
            },
            {
                id: 10016,
                name: '绿',
                organization: CharacterOrganization.Millennium,
                message: '我对这次画的图很有自信！',
            },
            {id: 13011, name: '桃', organization: CharacterOrganization.Millennium, message: ''},
            {
                id: 10017,
                name: '切里诺',
                organization: CharacterOrganization.RedWinter,
                message: '能与至高无上的本人相遇可是你的荣幸！',
            },
            {id: 26006, name: '和香', organization: CharacterOrganization.RedWinter, message: ''},
            {id: 10018, name: '柚子', organization: CharacterOrganization.Millennium, message: '不，不，不要找我……'},
            {
                id: 10019,
                name: '梓',
                organization: CharacterOrganization.Trinity,
                message: '一切都是枉然，人生一点意义都没有。\n但是……我想相信你说的话。',
            },
            {id: 23007, name: '花子', organization: CharacterOrganization.Trinity, message: ''},
            {
                id: 10020,
                name: '小春',
                organization: CharacterOrganization.Trinity,
                message: '不干净的东西就是要全部烧光！',
            },
            {
                id: 10021,
                name: '梓(泳装)',
                organization: CharacterOrganization.Trinity,
                message: '海……虽然是不熟悉的地方……',
            },
            {
                id: 20004,
                name: '真白(泳装)',
                organization: CharacterOrganization.Trinity,
                message: '正义不会被酷热打败！',
            },
            {id: 16005, name: '鹤城(泳装)', organization: CharacterOrganization.Trinity, message: ''},
            {
                id: 20005,
                name: '日富美(泳装)',
                organization: CharacterOrganization.Trinity,
                message: '啊哈哈……泳装有点平凡，真不好意思。',
            },
            {
                id: 10022,
                name: '日奈(泳装)',
                organization: CharacterOrganization.Gehenna,
                message: '夏天到了，该做的事依然没有改变。',
            },
            {
                id: 10023,
                name: '伊织(泳装)',
                organization: CharacterOrganization.Gehenna,
                message: '应该没有笨蛋会沉醉于海边的气氛不小心违反校规吧？',
            },
            {id: 16006, name: '泉(泳装)', organization: CharacterOrganization.Gehenna, message: ''},
            {
                id: 10024,
                name: '白子(单车)',
                organization: CharacterOrganization.Abydos,
                message: '我去去就回，老师。我会跟你联络。',
            },
            {
                id: 10025,
                name: '瞬(幼女)',
                organization: CharacterOrganization.ShanHaiJing,
                message: '娇小的身体果然方便！',
            },
            {id: 13012, name: '桐乃', organization: CharacterOrganization.Valkyrie, message: ''},
            {
                id: 20006,
                name: '纱绫(私服)',
                organization: CharacterOrganization.ShanHaiJing,
                message: '天才也需要休息。呼-呼-呼。',
            },
            {
                id: 10026,
                name: '尼禄(兔女郎)',
                organization: CharacterOrganization.Millennium,
                message: '真是的。这东西真让人不爽。',
            },
            {
                id: 10027,
                name: '花凛(兔女郎)',
                organization: CharacterOrganization.Millennium,
                message: '什么任务对我来说都不是问题。',
            },
            {
                id: 10028,
                name: '明日奈(兔女郎)',
                organization: CharacterOrganization.Millennium,
                message: '这次也一起大玩一场吧，主人！',
            },
            {
                id: 10029,
                name: '夏',
                organization: CharacterOrganization.Trinity,
                message: '你对奶油蛋糕有什么研究吗？老师，',
            },
            {id: 23008, name: '玛丽', organization: CharacterOrganization.Trinity, message: ''},
            {id: 20007, name: '初音未来', organization: CharacterOrganization.Etc, message: '请聆听我的歌声！'},
            {
                id: 20008,
                name: '亚子',
                organization: CharacterOrganization.Gehenna,
                message: '只要有我在，就绝不容许任何失误。',
            },
            {
                id: 20009,
                name: '切里诺(温泉)',
                organization: CharacterOrganization.RedWinter,
                message: '在<肃清君1号>的威严前，还不快跪下！',
            },
            {
                id: 10030,
                name: '千夏(温泉)',
                organization: CharacterOrganization.Gehenna,
                message: '今天有点……想要悠哉一下。',
            },
            {id: 16007, name: '智惠', organization: CharacterOrganization.RedWinter, message: ''},
            {
                id: 20010,
                name: '和香(温泉)',
                organization: CharacterOrganization.RedWinter,
                message: '我们将竭诚为您服务。',
            },
            {
                id: 10031,
                name: '阿露(正月)',
                organization: CharacterOrganization.Gehenna,
                message: '呵呵呵，今年的第一笔委托？\n很好。我会解决得干净利落。',
            },
            {
                id: 10032,
                name: '睦月(正月)',
                organization: CharacterOrganization.Gehenna,
                message: '呵呼呼~！今年也一起大玩特玩吧。老师！',
            },
            {
                id: 20011,
                name: '芹香(正月)',
                organization: CharacterOrganization.Abydos,
                message: '唔，为了老师，祈祷这点小事不算什么。',
            },
            {id: 10033, name: '若藻', organization: CharacterOrganization.Hyakkiyako, message: '啊啊……终于见到你了♡'},
            {id: 16008, name: '吹雪', organization: CharacterOrganization.Valkyrie, message: ''},
            {
                id: 20012,
                name: '濑名',
                organization: CharacterOrganization.Gehenna,
                message: '尸体……不对，请问伤患在哪里？',
            },
            {
                id: 20013,
                name: '千寻',
                organization: CharacterOrganization.Millennium,
                message: '看来发现了新的安全破口。',
            },
            {
                id: 10034,
                name: '三森',
                organization: CharacterOrganization.Hyakkiyako,
                message: '尽管尚有不足……\n但还是想请你看看我修行的成果。',
            },
            {id: 10035, name: '忧', organization: CharacterOrganization.Trinity, message: '请、请安静一点……'},
            {id: 10036, name: '日向', organization: CharacterOrganization.Trinity, message: '需要帮助吗？'},
            {
                id: 10037,
                name: '玛利娜',
                organization: CharacterOrganization.RedWinter,
                message: '逃跑对你一点帮助都没有！',
            },
            {id: 10038, name: '宫子', organization: CharacterOrganization.Srt, message: 'RABBIT 1。作战开始。'},
            {id: 20014, name: '咲', organization: CharacterOrganization.Srt, message: '代号RABBIT 2。灵敏度良好。'},
            {
                id: 10039,
                name: '美游',
                organization: CharacterOrganization.Srt,
                message: '这、这里是RABBIT 4。您、您找我吗……？',
            },
            {
                id: 20015,
                name: '枫',
                organization: CharacterOrganization.Hyakkiyako,
                message: '为了成为完美淑女！\n老师！今天也要出动！',
            },
            {
                id: 20016,
                name: '伊吕波',
                organization: CharacterOrganization.Gehenna,
                message: '你是需要我吧？\n这还真是…没办法了。',
            },
            {id: 16009, name: '满', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {
                id: 10040,
                name: '月咏',
                organization: CharacterOrganization.Hyakkiyako,
                message: '就、就算是徒长身高的我……\n也想要努力不懈，成为老师的助力！',
            },
            {
                id: 10041,
                name: '美咲',
                organization: CharacterOrganization.Arius,
                message: '那种巨大的空虚，没有什么解答。\n但是，就算是这样……',
            },
            {
                id: 20017,
                name: '日和',
                organization: CharacterOrganization.Arius,
                message: '今、今天运气很好呢！\n嘿嘿……',
            },
            {
                id: 10042,
                name: '亚津子',
                organization: CharacterOrganization.Arius,
                message: '这条路上如果也可以开满花就好了。',
            },
            {
                id: 10043,
                name: '若藻(泳装)',
                organization: CharacterOrganization.Hyakkiyako,
                message: '呵呵呵，若藻我找来这里了。\n亲．爱．的♡',
            },
            {
                id: 10044,
                name: '野宫(泳装)',
                organization: CharacterOrganization.Abydos,
                message: '果然夏天就是，要一起前往海边啊！',
            },
            {id: 26007, name: '绫音(泳装)', organization: CharacterOrganization.Abydos, message: ''},
            {
                id: 10045,
                name: '星野(泳装)',
                organization: CharacterOrganization.Abydos,
                message: '老师，来这里吧。\n挺凉爽的吗？',
            },
            {id: 26008, name: '静子(泳装)', organization: CharacterOrganization.Hyakkiyako, message: ''},
            {
                id: 10046,
                name: '泉奈(泳装)',
                organization: CharacterOrganization.Hyakkiyako,
                message: '今年夏天！泉奈，\n也会跟主公一起努力修炼！',
            },
            {
                id: 10047,
                name: '千世(泳装)',
                organization: CharacterOrganization.Hyakkiyako,
                message: '海边有很多神奇的东西呢～',
            },
            {
                id: 10048,
                name: '纱织',
                organization: CharacterOrganization.Arius,
                message: 'まだ、道半ばで迷っている――\nそれでも、いつかは……',
            },
            {
                id: 20018,
                name: '萌绘',
                organization: CharacterOrganization.Srt,
                message: 'こちらRABBIT3。次の爆撃場所はどこ？',
            },
            {
                id: 10049,
                name: '和纱',
                organization: CharacterOrganization.Trinity,
                message: 'あ、先生。\nこんな所で会えるなんて奇遇だね',
            },
            {
                id: 10050,
                name: '心奈',
                organization: CharacterOrganization.ShanHaiJing,
                message: '训育支援部“梅花园”的心奈！\n才、才不是呢！虽然我很小但我可是教官哦？',
            },
            {
                id: 10051,
                name: '歌原(应援团)',
                organization: CharacterOrganization.Millennium,
                message: '千年的应援团长，白石歌原。\n将以冷静的理性和炽热的热情，为大家应援。',
            },
            {
                id: 10052,
                name: '诺亚',
                organization: CharacterOrganization.Millennium,
                message: '研讨会的书记，生盐诺亚。\n请多多关照，老师……各方面的，是的。',
            },
            {
                id: 16010,
                name: '响(应援团)',
                organization: CharacterOrganization.Millennium,
                message: '老师…怎、怎么样…？\n第一次制作啦啦队的衣服…应该…还没那么糟糕吧？',
            },
            {
                id: 20019,
                name: '茜(兔女郎)',
                organization: CharacterOrganization.Millennium,
                message: '这里是主人的女仆，茜。\n不…我似乎应该说，今天是主人的兔女郎？',
            },
            {
                id: 10053,
                name: '优香(运动服)',
                organization: CharacterOrganization.Millennium,
                message: '晄輪大祭の準備も完璧！',
            },
            {
                id: 10054,
                name: '玛丽(运动服)',
                organization: CharacterOrganization.Trinity,
                message: 'この大運動会で\nみんなが笑顔で楽しく過ごせますように……',
            },
            {id: 16011, name: '莲见(运动服)', organization: CharacterOrganization.Trinity, message: ''},
            {
                id: 20020,
                name: '日鞠',
                organization: CharacterOrganization.Millennium,
                message: 'ふふっ、これはミレニアムの超天才清楚系病弱美少女ハッカーの\n出番ということですね？',
            },
            {
                id: 10055,
                name: '时雨',
                organization: CharacterOrganization.RedWinter,
                message: '体を温めるものが必要？\nふふっ……任せて',
            },
            {
                id: 10056,
                name: '芹娜(圣诞)',
                organization: CharacterOrganization.Trinity,
                message: '救護騎士団がクリスマスをお伝えに来ました！\nどうか、素敵なクリスマスになりますように！',
            },
            {
                id: 20021,
                name: '花江(圣诞)',
                organization: CharacterOrganization.Trinity,
                message: 'メリークリスマース！\n サンタさんの代わりに、救護の天使がやってきましたよ～！',
            },
            {
                id: 10057,
                name: '晴奈(正月)',
                organization: CharacterOrganization.Gehenna,
                message:
                    'この時期のお料理はどれも魅力的ですね……。\nお正月といえば、おせちやお雑煮、お汁粉……。\nああ……お腹が空いてきましたわ',
            },
            {
                id: 20022,
                name: '枫香(正月)',
                organization: CharacterOrganization.Gehenna,
                message: '先生、年越しそばは食べましたか？\n今年はお互い、穏やかな一年でありますように',
            },
            {id: 16012, name: '淳子(正月)', organization: CharacterOrganization.Gehenna, message: ''},
            {
                id: 10058,
                name: '美弥',
                organization: CharacterOrganization.Trinity,
                message: '救護騎士団団長、蒼森ミネと申します。\n救護が必要な方はどちらでしょうか？',
            },
            {
                id: 10059,
                name: '未花',
                organization: CharacterOrganization.Trinity,
                message: 'うん、お待たせ！\nこれからはなんでも私に任せてね☆',
            },
            {
                id: 10060,
                name: '惠',
                organization: CharacterOrganization.Gehenna,
                message: '障害物？私に任せて！撤去しちゃうよ～！',
            },
            {
                id: 20023,
                name: '叶渚',
                organization: CharacterOrganization.Valkyrie,
                message: '市民のため、誠心誠意奉仕します',
            },
            {
                id: 10061,
                name: '樱子',
                organization: CharacterOrganization.Trinity,
                message: 'あなたの一挙手一投足……。\nいつも、見守っておりますよ',
            },
            {
                id: 10062,
                name: '时',
                organization: CharacterOrganization.Millennium,
                message: '何なりとお申し付けください。\n私は完璧なエージェントであり、メイドですので',
            },
            {
                id: 20024,
                name: '渚',
                organization: CharacterOrganization.Trinity,
                message: '……ごきげんよう。\nトリニティを代表してご挨拶申し上げます',
            },
            {
                id: 10063,
                name: '小雪',
                organization: CharacterOrganization.Millennium,
                message: '思い通りにいかない時こそ、\n人生は面白くなるんですよ！',
            },
            {
                id: 10064,
                name: '佳代子(正月)',
                organization: CharacterOrganization.Gehenna,
                message: '今年はどうか、\nいい事がたくさんありますように',
            },
            {
                id: 20025,
                name: '遥香(正月)',
                organization: CharacterOrganization.Gehenna,
                message: '今年も……。\n死ぬほど頑張ります！！',
            },
            {
                id: 10065,
                name: '果穗',
                organization: CharacterOrganization.Hyakkiyako,
                message: '百鬼夜行の様々な魅力を、\n先生にもお伝えいたしますね',
            },
            {
                id: 10066,
                name: '爱丽丝(女仆)',
                organization: CharacterOrganization.Millennium,
                message: 'ぱんぱかぱーん！\nアリスはメイド勇者にジョブチェンジしました！',
            },
            {
                id: 10067,
                name: '时(兔女郎)',
                organization: CharacterOrganization.Millennium,
                message: '作戦遂行準備、完了。いつでも行けます。\nこの格好……？何か問題でも？',
            },
            {id: 26009, name: '柚子(女仆)', organization: CharacterOrganization.Millennium, message: ''},
            {
                id: 10068,
                name: '玲纱',
                organization: CharacterOrganization.Trinity,
                message: '正義を求める人の元に……私あり……そう私こそがスーパースター。\n宇沢レイサ、見参です！',
            },
            {
                id: 10069,
                name: '瑠美',
                organization: CharacterOrganization.ShanHaiJing,
                message: 'お腹空いた人、いる～？',
            },
            {
                id: 10070,
                name: '弥奈',
                organization: CharacterOrganization.ShanHaiJing,
                message: '火の粉は一人で受け止めよう。\n――それが最善策だからな',
            },
            {
                id: 20026,
                name: '实里',
                organization: CharacterOrganization.RedWinter,
                message: 'キヴォトス中のすべてのプリンは\n闘争する生徒のためのものだ！',
            },
            {
                id: 10071,
                name: '宫子(泳装)',
                organization: CharacterOrganization.Srt,
                message: 'こちらはRABBIT1。\nただいま海に到着しました',
            },
            {
                id: 10072,
                name: '咲(泳装)',
                organization: CharacterOrganization.Srt,
                message: 'こちらはRABBIT2。\n現時刻より潜入作戦を開始する',
            },
            {id: 26010, name: '美游(泳装)', organization: CharacterOrganization.Srt, message: ''},
            {
                id: 20027,
                name: '白子(泳装)',
                organization: CharacterOrganization.Abydos,
                message: '……浮かれてない。\nすべきことをするだけ',
            },
            {
                id: 10073,
                name: '忧(泳装)',
                organization: CharacterOrganization.Trinity,
                message: 'はあ、はあ……暑い……\n最悪……',
            },
            {
                id: 20028,
                name: '日向(泳装)',
                organization: CharacterOrganization.Trinity,
                message: 'よかったら、荷物をお持ちしましょうか？',
            },
            {id: 16013, name: '小春(泳装)', organization: CharacterOrganization.Trinity, message: ''},
            {
                id: 10074,
                name: '花子(泳装)',
                organization: CharacterOrganization.Trinity,
                message: 'あら……。\nこんなにびっしょり……♡',
            },
            {
                id: 20029,
                name: '三森(泳装)',
                organization: CharacterOrganization.Hyakkiyako,
                message: 'このまま、この時間が続いてくれたらいいのに……',
            },
            {
                id: 10075,
                name: '芽瑠',
                organization: CharacterOrganization.RedWinter,
                message: '起きて……\n原稿…… しないと……',
            },
            {id: 13013, name: '红叶', organization: CharacterOrganization.RedWinter, message: ''},
            {
                id: 10076,
                name: '柯托莉(应援团)',
                organization: CharacterOrganization.Millennium,
                message: '場所が変わっても知識の価値は変わりません！',
            },
            {
                id: 20030,
                name: '晴奈(运动服)',
                organization: CharacterOrganization.Gehenna,
                message: '運動した分、お腹も減ったかと思います。\nさあ、ともに美食の旅へと参りましょう',
            },
        ];
    },
};
