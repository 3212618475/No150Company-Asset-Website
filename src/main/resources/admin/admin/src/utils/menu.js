const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"部门管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBumen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资产类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZichan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资产报废类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZichanBaofei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资产申请类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZichanShenqing"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资料类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZiliaoku"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "报表",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产管理",
                        "menuJump":"列表",
                        "tableName":"zichan"
                    }
                ],
                "menu":"资产管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产报废管理",
                        "menuJump":"列表",
                        "tableName":"zichanBaofei"
                    }
                ],
                "menu":"资产报废管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "报表",
                            "审核",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产申请管理",
                        "menuJump":"列表",
                        "tableName":"zichanShenqing"
                    }
                ],
                "menu":"资产申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资料库管理",
                        "menuJump":"列表",
                        "tableName":"ziliaoku"
                    }
                ],
                "menu":"资料库管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
    ,
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"公告管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"资产管理",
                                "menuJump":"列表",
                                "tableName":"zichan"
                            }
                        ],
                        "menu":"资产管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增"
                                ],
                                "menu":"资产申请管理",
                                "menuJump":"列表",
                                "tableName":"zichanShenqing"
                            }
                        ],
                        "menu":"资产申请管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"资料库管理",
                                "menuJump":"列表",
                                "tableName":"ziliaoku"
                            }
                        ],
                        "menu":"资料库管理"
                    }
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"员工",
                "tableName":"yuangong"
            }
]
    }
}
export default menu;
