window.jsonData = [
    {
        "id": "红方无人机_1",
        "name": "红方无人机_1",
        "side": "红方",
        "coordinate": {
            "longitude": 119.135354,
            "latitude": 34.557166,
            "altitude": 132.53
        },
        "show": true,
        "attribute": [
            {
                "time": 10,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "plane.png",
        "route": [
            {
                "time": 10,
                "coordinate": {
                    "longitude": 119.135354,
                    "latitude": 34.557166,
                    "altitude": 132.53
                }
            },
            {
                "time": 20,
                "coordinate": {
                    "longitude": 119.139229,
                    "latitude": 34.559705,
                    "altitude": 164.85
                }
            },
            {
                "time": 27,
                "coordinate": {
                    "longitude": 119.139485,
                    "latitude": 34.561562,
                    "altitude": 64.14
                }
            }
        ],
        "action": [
            {
                "start_time": 10,
                "end_time": 27,
                "type": "scout",//侦察
                "description": "",
                "radius": 100 //半径（米）
            }
        ]
    },
    {
        "id": "红方战斗机_1",
        "name": "红方战斗机_1",
        "side": "红方",
        "coordinate": {
            "longitude": 119.137169,
            "latitude": 34.556437,
            "altitude": 144.86
        },
        "show": true,
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "plane.png",
        "route": [
            {
                "time": 115,
                "coordinate": {
                    "longitude": 119.137169,
                    "latitude": 34.556437,
                    "altitude": 144.86
                }
            },
            {
                "time": 124,
                "coordinate": {
                    "longitude": 119.139721,
                    "latitude": 34.559627,
                    "altitude": 155.65
                }
            },
            {
                "time": 129,
                "coordinate": {
                    "longitude": 119.141207,
                    "latitude": 34.560733,
                    "altitude": 134.55
                }
            }
        ],
        "action": [
            {
                "time": 124,//打击时间
                "duration": 2,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方装甲车_1",
                    "name": "蓝方装甲车_1",
                    "coordinate": {
                        "longitude": 119.140073,
                        "latitude": 34.56005,
                        "altitude": 42.98
                    }
                }
            }
        ]
    },
    {
        "id": "红方战斗机_2",
        "name": "红方战斗机_2",
        "side": "红方",
        "coordinate": {
            "longitude": 119.13545,
            "latitude": 34.557001,
            "altitude": 138.52
        },
        "show": true,
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "plane.png",
        "route": [
            {
                "time": 115,
                "coordinate": {
                    "longitude": 119.13545,
                    "latitude": 34.557001,
                    "altitude": 138.52
                }
            },
            {
                "time": 123,
                "coordinate": {
                    "longitude": 119.138464,
                    "latitude": 34.559228,
                    "altitude": 169.04
                }
            },
            {
                "time": 130,
                "coordinate": {
                    "longitude": 119.141203,
                    "latitude": 34.560597,
                    "altitude": 136.75
                }
            }
        ],
        "action": [
            {
                "time": 123,//打击时间
                "duration": 1.5,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方坦克_1",
                    "name": "蓝方坦克_1",
                    "coordinate": {
                        "longitude": 119.138273,
                        "latitude": 34.559331,
                        "altitude": 69.18
                    }
                }
            }
        ]
    },
    {
        "id": "红方坦克_1",
        "name": "红方坦克_1",
        "side": "红方",
        "coordinate": {
            "longitude": 119.1357,
            "latitude": 34.559055,
            "altitude": 96.43
        },
        "show": true,
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "redTank.png",
        "route": [
            {
                "time": 115,
                "coordinate": {
                    "longitude": 119.1357,
                    "latitude": 34.559055,
                    "altitude": 96.43
                }
            },
            {
                "time": 120,
                "coordinate": {
                    "longitude": 119.136329,
                    "latitude": 34.558145,
                    "altitude": 98.84
                }
            },
            {
                "time": 126,
                "coordinate": {
                    "longitude": 119.137309,
                    "latitude": 34.558799,
                    "altitude": 81.79
                }
            },
            {
                "time": 135,
                "coordinate": {
                    "longitude": 119.137989,
                    "latitude": 34.559276,
                    "altitude": 69.66
                }
            },
            {
                "time": 145,
                "coordinate": {
                    "longitude": 119.138291,
                    "latitude": 34.559389,
                    "altitude": 68.93
                }
            },
            {
                "time": 150,
                "coordinate": {
                    "longitude": 119.138391,
                    "latitude": 34.559606,
                    "altitude": 67.13
                }
            }
        ],
        "action": [
            {
                "time": 135,//打击时间
                "duration": 4,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方坦克_1",
                    "name": "蓝方坦克_1",
                    "coordinate": {
                        "longitude": 119.138093,
                        "latitude": 34.559223,
                        "altitude": 70.09
                    }
                }
            },
            {
                "time": 140,//打击时间
                "duration": 3,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方坦克_1",
                    "name": "蓝方坦克_1",
                    "coordinate": {
                        "longitude": 119.138436,
                        "latitude": 34.559826,
                        "altitude": 65.06
                    }
                }
            }
        ]
    },
    {
        "id": "红方坦克_2",
        "name": "红方坦克_2",
        "side": "红方",
        "coordinate": {
            "longitude": 119.13574,
            "latitude": 34.559054,
            "altitude": 96.2
        },
        "show": true,
        "attribute": [
            {
                "time": 115,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "redTank.png",
        "route": [
            {
                "time": 115,
                "coordinate": {
                    "longitude": 119.13574,
                    "latitude": 34.559054,
                    "altitude": 96.2
                }
            },
            {
                "time": 118.9,
                "coordinate": {
                    "longitude": 119.136251,
                    "latitude": 34.558141,
                    "altitude": 99.78
                }
            },
            {
                "time": 124.9,
                "coordinate": {
                    "longitude": 119.13727,
                    "latitude": 34.558717,
                    "altitude": 83.07
                }
            },
            {
                "time": 132.9,
                "coordinate": {
                    "longitude": 119.13789,
                    "latitude": 34.559231,
                    "altitude": 70.22
                }
            },
            {
                "time": 139.9,
                "coordinate": {
                    "longitude": 119.138285,
                    "latitude": 34.559376,
                    "altitude": 69.01
                }
            },
            {
                "time": 153,
                "coordinate": {
                    "longitude": 119.138314,
                    "latitude": 34.559805,
                    "altitude": 64.79
                }
            }
        ],
        "action": [
            {
                "time": 132.9,//打击时间
                "duration": 5.1,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方防空导弹车_1",
                    "name": "蓝方防空导弹车_1",
                    "coordinate": {
                        "longitude": 119.138273,
                        "latitude": 34.559331,
                        "altitude": 69.18
                    }
                }
            },
            {
                "time": 142,//打击时间
                "duration": 2,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方防空导弹车_1",
                    "name": "蓝方防空导弹车_1",
                    "coordinate": {
                        "longitude": 119.138361,
                        "latitude": 34.559239,
                        "altitude": 70.5
                    }
                }
            },
            {
                "time": 144,//打击时间
                "duration": 2,//持续时间
                "type": "attack",//打击
                "attack_mode": "直瞄",
                "target": {
                    "id": "蓝方装甲车_1",
                    "name": "蓝方装甲车_1",
                    "coordinate": {
                        "longitude": 119.138605,
                        "latitude": 34.559876,
                        "altitude": 63.78
                    }
                }
            }
        ]
    },
    {
        "id": "红方装甲车_1",
        "name": "红方装甲车_1",
        "side": "红方",
        "coordinate": {
            "longitude": 119.135584,
            "latitude": 34.558971,
            "altitude": 100.84
        },
        "show": true,
        "attribute": [
            {
                "time": 115,//时间
                "is_fly": 1,//是否处于空中
                "length": 9.05,//长度m
                "width": 14.0,//宽度m
                "height": 2.77,//高度m
                "power": 550,//火力指数
                "scout": 70,//侦察半径公里
                "efficiency": 700,//功率kw
                "speed": 370,//速度公里/小时
                "valid_firing_range": 16,//有效射程
                "load": 500,//有效载荷kg
                "endurance": 1920,//续航时间min
                "residual_blood_volume": 0.9,//初始为1剩余血量
                "danyao": "C-802"
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "redCar.png",
        "route": [
            {
                "time": 115,
                "coordinate": {
                    "longitude": 119.135584,
                    "latitude": 34.558971,
                    "altitude": 100.84
                }
            },
            {
                "time": 120.5,
                "coordinate": {
                    "longitude": 119.136381,
                    "latitude": 34.558172,
                    "altitude": 98.41
                }
            },
            {
                "time": 128,
                "coordinate": {
                    "longitude": 119.137953,
                    "latitude": 34.55851,
                    "altitude": 78.23
                }
            },
            {
                "time": 136,
                "coordinate": {
                    "longitude": 119.138306,
                    "latitude": 34.558913,
                    "altitude": 71.52
                }
            },
            {
                "time": 146,
                "coordinate": {
                    "longitude": 119.138281,
                    "latitude": 34.559506,
                    "altitude": 68.7
                }
            },
            {
                "time": 152,
                "coordinate": {
                    "longitude": 119.138478,
                    "latitude": 34.559634,
                    "altitude": 66.84
                }
            }
        ],
        "action": [
            {
                "time": 136,//打击时间
                "duration": 4,//持续时间
                "type": "attack",//打击
                "attack_mode": "绿色",
                "target": {
                    "id": "蓝方防空导弹车_1",
                    "name": "蓝方防空导弹车_1",
                    "coordinate": {
                        "longitude": 119.13828,
                        "latitude": 34.559187,
                        "altitude": 70.03
                    }
                }
            },
            {
                "time": 143,//打击时间
                "duration": 3,//持续时间
                "type": "attack",//打击
                "attack_mode": "绿色",
                "target": {
                    "id": "蓝方装甲车_2",
                    "name": "蓝方装甲车_2",
                    "coordinate": {
                        "longitude": 119.138697,
                        "latitude": 34.55988,
                        "altitude": 63.95
                    }
                }
            }
        ]
    },


    {
        "id": "蓝方坦克_1",
        "name": "蓝方坦克_1",
        "side": "蓝方",
        "show": false,
        "coordinate": {
            "longitude": 119.138012,
            "latitude": 34.559383,
            "altitude": 68.91
        },
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.97,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            },
            {
                "time": 126,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.45,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "blueTank.png",
        "route": [
            {
                "time": 114,
                "coordinate": {
                    "longitude": 119.138012,
                    "latitude": 34.559383,
                    "altitude": 68.91
                }
            },
            {
                "time": 124,
                "coordinate": {
                    "longitude": 119.138012,
                    "latitude": 34.559383,
                    "altitude": 68.91
                }
            },
            {
                "time": 127,
                "coordinate": {
                    "longitude": 119.137955,
                    "latitude": 34.559197,
                    "altitude": 70.36
                }
            },
            {
                "time": 134,
                "coordinate": {
                    "longitude": 119.138012,
                    "latitude": 34.559383,
                    "altitude": 68.91
                }
            },
            {
                "time": 135,
                "coordinate": {
                    "longitude": 119.137944,
                    "latitude": 34.559253,
                    "altitude": 69.77
                }
            },
            {
                "time": 137,
                "coordinate": {
                    "longitude": 119.138252,
                    "latitude": 34.559365,
                    "altitude": 69.02
                }
            },
            {
                "time": 139,
                "coordinate": {
                    "longitude": 119.138326,
                    "latitude": 34.559281,
                    "altitude": 69.53
                }
            },
            {
                "time": 141,
                "coordinate": {
                    "longitude": 119.138321,
                    "latitude": 34.559209,
                    "altitude": 69.81
                }
            },
            {
                "time": 147,
                "coordinate": {
                    "longitude": 119.138489,
                    "latitude": 34.560046,
                    "altitude": 62.08
                }
            }
        ],
        "action": [
            {
                "time": 134,//防御时间
                "duration": 4,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方坦克_1",
                    "name": "红方坦克_1",
                    "coordinate": {
                        "longitude": 119.137989,
                        "latitude": 34.559276,
                        "altitude": 69.66
                    }
                }
            },
            {
                "time": 139,//防御时间
                "duration": 3,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方装甲车_2",
                    "name": "红方装甲车_1",
                    "coordinate": {
                        "longitude": 119.137989,
                        "latitude": 34.559276,
                        "altitude": 69.66
                    }
                }
            }
        ]
    },
    {
        "id": "蓝方防空导弹车_1",
        "name": "蓝方防空导弹车_1",
        "side": "蓝方",
        "show": false,
        "coordinate": {
            "longitude": 119.138273,
            "latitude": 34.559331,
            "altitude": 69.18
        },
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.97,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            },
            {
                "time": 125.9,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.2,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "blueBoomCar.png",
        "route": [
            {
                "time": 114,
                "coordinate": {
                    "longitude": 119.138273,
                    "latitude": 34.559331,
                    "altitude": 69.18
                }
            },
            {
                "time": 124,
                "coordinate": {
                    "longitude": 119.138273,
                    "latitude": 34.559331,
                    "altitude": 69.18
                }
            },
            {
                "time": 126,
                "coordinate": {
                    "longitude": 119.138273,
                    "latitude": 34.559331,
                    "altitude": 69.18
                }
            },
            {
                "time": 128,
                "coordinate": {
                    "longitude": 119.138329,
                    "latitude": 34.559431,
                    "altitude": 68.62
                }
            },
            {
                "time": 134,
                "coordinate": {
                    "longitude": 119.138273,
                    "latitude": 34.559331,
                    "altitude": 69.18
                }
            },
            {
                "time": 135,
                "coordinate": {
                    "longitude": 119.13828,
                    "latitude": 34.559187,
                    "altitude": 70.03
                }
            },
            {
                "time": 137,
                "coordinate": {
                    "longitude": 119.138305,
                    "latitude": 34.559013,
                    "altitude": 71.08
                }
            },
            {
                "time": 140,
                "coordinate": {
                    "longitude": 119.138283,
                    "latitude": 34.559406,
                    "altitude": 68.83
                }
            },
            {
                "time": 146,
                "coordinate": {
                    "longitude": 119.138476,
                    "latitude": 34.559949,
                    "altitude": 63.66
                }
            }
        ],
        "action": [
            {
                "time": 124,//防御时间
                "duration": 2,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方战斗机_2",
                    "name": "红方战斗机_2",
                    "coordinate": {
                        "longitude": 119.138607,
                        "latitude": 34.559206,
                        "altitude": 68.83
                    }
                }
            },
            {
                "time": 133.9,//防御时间
                "duration": 4,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方坦克_2",
                    "name": "红方坦克_2",
                    "coordinate": {
                        "longitude": 119.13789,
                        "latitude": 34.559231,
                        "altitude": 70.22
                    }
                }
            },
            {
                "time": 138,//防御时间
                "duration": 3,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方装甲车_1",
                    "name": "红方装甲车_1",
                    "coordinate": {
                        "longitude": 119.13789,
                        "latitude": 34.559231,
                        "altitude": 70.22
                    }
                }
            }
        ]
    },
    {
        "id": "蓝方装甲车_1",
        "name": "蓝方装甲车_1",
        "side": "蓝方",
        "show": false,
        "coordinate": {
            "longitude": 119.140073,
            "latitude": 34.56005,
            "altitude": 42.98
        },
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.97,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            },
            {
                "time": 136,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "blueCar.png",
        "route": [
            {
                "time": 125,
                "coordinate": {
                    "longitude": 119.140073,
                    "latitude": 34.56005,
                    "altitude": 42.98
                }
            },
            {
                "time": 127,
                "coordinate": {
                    "longitude": 119.139679,
                    "latitude": 34.560118,
                    "altitude": 44.62
                }
            },
            {
                "time": 135,
                "coordinate": {
                    "longitude": 119.140073,
                    "latitude": 34.56005,
                    "altitude": 42.98
                }
            },
            {
                "time": 137,
                "coordinate": {
                    "longitude": 119.139713,
                    "latitude": 34.560088,
                    "altitude": 43.65
                }
            },
            {
                "time": 139,
                "coordinate": {
                    "longitude": 119.139525,
                    "latitude": 34.560322,
                    "altitude": 55.74
                }
            },
            {
                "time": 141,
                "coordinate": {
                    "longitude": 119.139266,
                    "latitude": 34.560124,
                    "altitude": 58.21
                }
            },
            {
                "time": 143,
                "coordinate": {
                    "longitude": 119.138912,
                    "latitude": 34.559853,
                    "altitude": 64.36
                }
            },
            {
                "time": 145,
                "coordinate": {
                    "longitude": 119.138506,
                    "latitude": 34.559911,
                    "altitude": 64.16
                }
            }
        ],
        "action": [
            {
                "time": 144,//防御时间
                "duration": 3,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方坦克_2",
                    "name": "红方坦克_2",
                    "coordinate": {
                        "longitude": 119.138453,
                        "latitude": 34.559805,
                        "altitude": 65.26
                    }
                }
            }
        ]
    },
    {
        "id": "蓝方装甲车_2",
        "name": "蓝方装甲车_2",
        "side": "蓝方",
        "show": false,
        "coordinate": {
            "longitude": 119.13997,
            "latitude": 34.559721,
            "altitude": 44.21
        },
        "attribute": [
            {
                "time": 114,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0.97,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            },
            {
                "time": 134.5,//时间
                "is_fly": 1,//是否处于空中
                "length": 5.85,//长度m
                "width": 8.55,//宽度m
                "height": 1.25,//高度m
                "power": 500,//火力指数
                "scout": 200,//侦察半径km
                "speed": 370,//速度公里/小时
                "voyage": 200,//航程km
                "valid_firing_range": 150,//有效射程km
                "load": 150,//有效载荷kg
                "endurance": 240,//续航时间min
                "residual_blood_volume": 0,//初始为1剩余血量
                "danyao": "Javelin"//携带弹种
            }
        ],
        "modelScale": 0.05,//模型比例
        "modelUrl": "blueCar.png",
        "route": [
            {
                "time": 136,
                "coordinate": {
                    "longitude": 119.140073,
                    "latitude": 34.56005,
                    "altitude": 42.98
                }
            },
            {
                "time": 138,
                "coordinate": {
                    "longitude": 119.139713,
                    "latitude": 34.560088,
                    "altitude": 43.65
                }
            },
            {
                "time": 140,
                "coordinate": {
                    "longitude": 119.139525,
                    "latitude": 34.560322,
                    "altitude": 55.74
                }
            },
            {
                "time": 142,
                "coordinate": {
                    "longitude": 119.139266,
                    "latitude": 34.560124,
                    "altitude": 58.21
                }
            },
            {
                "time": 144,
                "coordinate": {
                    "longitude": 119.138912,
                    "latitude": 34.559853,
                    "altitude": 64.36
                }
            },
            {
                "time": 146,
                "coordinate": {
                    "longitude": 119.138506,
                    "latitude": 34.559911,
                    "altitude": 64.16
                }
            }
        ],
        "action": [
            {
                "time": 142,//防御时间
                "duration": 3,//持续时间
                "type": "attack",//防御
                "attack_mode": "间瞄",
                "target": {
                    "id": "红方装甲车_1",
                    "name": "红方装甲车_1",
                    "coordinate": {
                        "longitude": 119.138342,
                        "latitude": 34.559753,
                        "altitude": 65.33
                    }
                }
            }
        ]
    }
]

window.timeCamera = [
    {
        "time": 0,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": null,
        "pause": 1,
        "duration_time": 3,
        "caption": ""
    },
    {
        "time": 1,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": null,
        "pause": 1,
        "duration_time": 3,
        "caption": ""
    },
    {
        "time": 6,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请以一米为分辨率对该区域进行侦察",
        "output": "好的，即将派遣一架翼龙-2无人机进行侦察",
        "caption": "大模型可以充分理解指挥员的意图并将其转化为对应指令"
    },
    {
        "time": 28,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": "侦察完毕。在该区域有蓝方装甲车_1位于（119.140073,34.56005,42.98），其可能隶属于装甲步兵一连分队；蓝方装甲车_2位于（119.13997,34.559721,44.21），其可能隶属于装甲步兵一连分队；蓝方坦克_1位于 （119.138012,34.559383,68.91），其可能隶属于装甲步兵一连分队；蓝方防空导弹车_1位于（119.138273,34.559331,69.18），其可能隶属于防空兵一连分队。",
        "caption": ""
    },
    {
        "time": 37,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请告诉我该区域每个敌方单位在其作战体系中的重要性指数",
        "output": "好的，根据目标价值分析模型计算得出敌方单位的重要性指数，蓝方防空导弹车_1的重要性指数是0.623，\n蓝方坦克_1的重要性指数是0.561，\n蓝方装甲车_1的重要性指数是0.433，\n蓝方装甲车_2的重要性指数是0.472",
        "caption": ""
    },
    {
        "time": 48,//+2
        "type": "threatLevel",
        "id": "红方坦克_1",
        "data":
            {
                "蓝方装甲车_1": {"威胁程度": 0.329},
                "蓝方装甲车_2": {"威胁程度": 0.368},
                "蓝方坦克_1": {"威胁程度": 0.813},
                "蓝方防空导弹车_1": {"威胁程度": 0.226}
            },
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请告诉我该区域中对红方坦克_1威胁度最大的敌方单位",
        "magnify": 1,
        "magnify_time": 4,
        "output": `好的，根据威胁判断模型计算得出蓝方装甲车_1的威胁程度为0.329，蓝方装甲车_2威胁度为0.368，蓝方坦克_1的威胁度为0.813，蓝方防空导弹车的威胁度为0.226，最大的敌方单位是蓝方坦克_1，该单位具体信息如下：<img src='./table1.png'>`,
        "caption": "微调后的大模型具备态势理解能力，可以提供威胁判断分析、重心分析等多种功能"
    },
    {
        "time": 65,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请为我生成敌方目标清单并按照打击顺序由高到低排列",
        "magnify": 1,
        "magnify_time": 4,
        "output": `好的，根据目标清单生成模型生成了目标清单表，该表具体信息如下：<img src='./excel1.png'>`,
        "caption": ""
    },
    {
        "time": 80,// +4
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请分析我方力量与装备，总结优劣势",
        "magnify": 1,
        "magnify_time": 3,
        "output": `好的，根据兵力兵器分析模型得到力量与装备表，该表具体信息如下：<img src='./excel2.png'>`,
        "caption": ""
    },
    {
        "time": 98,// +10
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "现在拟采取信火重点毁瘫、强击控要围歼的战法，要求尽快摧毁敌防御体系要害目标蓝方防空导弹车_1。请针对该任务为我推荐临时打击规划",
        "magnify": 1,
        "magnify_time": 4,
        "output": `根据您的要求，使用火力打击规划模型生成了两套火力打击计划，火力打击计划表如下：<img src='./table2.png'>`,
        "caption": "大模型提供了方案生成功能，可以智能生成作战计划并进行评估"
    },
    {
        "time": 112,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "我确认第一套打击方案可行，执行第一套方案",
        "output": "好的，即将执行该方案",
        "caption": ""
    },
    {
        "time": 115,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": null,
        "caption": ""
    },
    {
        "time": 118,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": null,
        "caption": ""
    },
    {
        "time": 121,
        "camera": {
            "destination": {"x": -2560523.884835957, "y": 4593037.016648659, "z": 3597936.3067695084},
            "orientation": {"heading": 3.251093166876804, "pitch": -1.5230068265652017, "roll": 3.141584737086877}
        },
        "input": null,
        "output": null
    },
    {
        "time": 125,
        "camera": {
            "destination": {"x": -2560523.884835957, "y": 4593037.016648659, "z": 3597936.3067695084},
            "orientation": {"heading": 3.251093166876804, "pitch": -1.5230068265652017, "roll": 3.141584737086877}
        },
        "input": null,
        "output": null,
        "pause": 1,
        "duration_time": 3,
        "caption": "可以看到，蓝军防空导弹车正在反击红军战斗机，而蓝军的决策动作是由强化学习智能体控制产生的"
    },
    {
        "time": 141,
        "camera": {
            "destination": {"x": -2560523.884835957, "y": 4593037.016648659, "z": 3597936.3067695084},
            "orientation": {"heading": 3.251093166876804, "pitch": -1.5230068265652017, "roll": 3.141584737086877}
        },
        "input": null,
        "output": null,
        "pause": 1,
        "duration_time": 3,
        "caption": "经过行为克隆和强化学习的训练后，蓝军会在发现战斗处于劣势时撤退，并且呼叫支援"
    },
    {
        "time": 155,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": "请对本次打击任务进行评估",
        "magnify": 1,
        "magnify_time": 3,
        "output": `好的，本次打击任务重伤了敌方重点目标蓝方防空导弹车_1，重创了敌防御体系，敌方损耗情况：蓝方坦克_1损耗0.62，蓝方装甲车_1损耗0.32，蓝方装甲车_2损耗0.28；我方损耗情况：红方战斗机_1损耗0.11，红方战斗机_2损耗0.77，红方坦克_1损耗0.42，红方坦克_2损耗0.33，红方装甲车_1损耗0.21。评估结果具体如下：<img src='./table3.png'>`,
        "caption": ""
    },
    {
        "time": 168,
        "camera": {
            "destination": {"x": -2560569.6988934404, "y": 4593313.575969633, "z": 3597992.0663926136},
            "orientation": {"heading": 3.3119104793204395, "pitch": -1.5164468663222013, "roll": 3.141596743379091}
        },
        "input": null,
        "output": null
    },
    {
        start: 127,
        videoUrl: 'viteVideo.mp4'
    }
]


// {
//   "destination":
//   {
//     "x":-2710520.385661524,
//     "y":4702139.953755469,
//     "z":3343792.0976197617
//   },
//   "orientation":
//   {
//     "heading":6.283185307179583,
//     "pitch":-1.5696480070927388,
//     "roll":0
//   }
// }
// {
//   "destination":
//   {
//     "x":-2711285.1838609264,
//     "y":4701712.951198628,
//     "z":3343772.4913937915
//   },
//   "orientation":
//   {
//     "heading":6.283185307179584,
//     "pitch":-1.5696480179563168,
//     "roll":0
//   }
// }


// export const entityMap = {
//   name: "名称",
//   source: "情报来源",
//   height: "高度(cm)",
//   reconnaissance: "侦察距离",
//   range: "射程(m)",
//   power: "火力指数",
//   side: "属方",
//   speed: '速度',
//   threat_score: '威胁分数'
// };
window.entityMap = {
    // "time": "时间(min)",
    "is_fly": "是否处于空中",
    "length": "长度(m)",
    "width": "宽度(m)",
    "height": "高度(m)",
    "power": "火力指数",
    "scout": "侦察半径(km)",
    "efficiency": "功率(kw)",
    "speed": "速度(km/h)",
    "valid_firing_range": "有效射程(m)",
    "load": "有效载荷(kg)",
    "endurance": "续航时间(min)",
    "residual_blood_volume": "剩余血量",
    "operation_range": "作用范围(m)",
    "voyage": "航程(km)"
};
window.sourceMap = {
    "1": "无人机",
    "2": "侦察车",
    "3": "侦察兵"
};
window.weatherCfg = {
    daytime: "昼间", //天时(昼间，晨昏，夜间)
    weather: "晴朗", //天气(晴朗，多云，阴)
    moon: "无", //星月(无，星光，月光)
    snow: "无", //雪(小雪，中雪，大雪，暴雪)
    rain: "无", //雨(小雨，中雨，大雨，暴雨)
    fog: "无", //雾(薄雾，轻雾，大雾，浓雾，重雾)
    haze: "无", //霾(轻微，轻度，中度，重度)
    dust: "无" //沙尘(浮尘，扬尘，沙尘暴，强沙尘暴)
};


// [
//   {
//     time: 1,
//     camera:{"destination":{"x":-2710703.685114838,"y":4701453.703904231,"z":3344608.3626404684},"orientation":{"heading":6.2831853071795845,"pitch":-1.5696475549277018,"roll":0}},
//     input: '',
//     output:'',
//     area: [],
//
//   },
// ]
