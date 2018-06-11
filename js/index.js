var data1 = ['管理员项','客户信息','管理动作','业务考评','资产管理维护','分析图表','退出'];
var data2 = [['权限分配','部门设置','员工管理','押品设置','操作纪录', "客户性质", "货款产品", "收款方式", "合作银行", "全部银行", "渠道"],
['贷款明细','费用发放','客户照片', '还款明细','相关人员', '数据导入' ],
['客户签约', '签约审核', '风控验收', '货款到款', '货款发放', '客户调查'],
['业绩情况','市场开放','市场维护','费用支出'],
['资产管理','设备设置','设备保修','保修审核','已审核问题'],
['月日均变化图','贷款笔数变化图'],
['通知','个人资料','退出']];

// array = [1,2,3];
// array2 = [[11],[21],[31]];
// array[0] = 1;
// array[1][1] = 2;
// [1,11,2,21,3,31]
var datas = new Array();
for(var i = 0;i<data1.length;i++){
    datas.push(data1[i]);
    // datas.push(data2[i]);
    var dd = data2[i];
    for(var j = 0; j < dd.length ;j++){
        
        datas.push(dd[j]);
    }
    // if(i == 0)break;
}
// console.log(datas);


function initTree(t) {// 创建1表和2表
    // header样式调整

    // header 样式调整改变
    var tree = document.getElementById(t);
    var lists = tree.getElementsByTagName('li');
    for (var i = 0; i < lists.length; i++) {
        var item = lists[i];//li
        (function (num) {
            var sub_ul = item.getElementsByTagName('ul');
            var a_el = item.getElementsByTagName('a');
            var b_el = item.getElementsByTagName('b');
            if (sub_ul.length != 0) {//1表
                sub_ul[0].style.display = 'none';
                a_el[0].style.color="#f47f03";
                a_el[0].onclick = function () {
                    // this.style.color="#f47f03";
                    if (sub_ul[0].style.display == 'block') {
                        sub_ul[0].style.display = 'none';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-right.png")';
                    } else {
                        sub_ul[0].style.display = 'block';
                        b_el[0].style.backgroundImage = 'url("./sources/images/arrow-down.png")';
                    }
                }
            } else {//2表
                
                a_el[0].onclick = function () {
                    var li_el = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('li');
                    for (var i = 0; i < li_el.length; i++) {
                        var sub_a = li_el[i].getElementsByTagName('a');
                        // sub_a[0].classList.remove('item-selected');
                        sub_a[0].style.borderLeft = '4px solid #f8f6f7';
                        sub_a[0].style.color="#999";
                        // for(var j=0;j<li_el.length;j++){
                        //     initEl+j();
                        // }
                       
                    }
                    // this.classList.add('item-selected');
                    this.style.borderLeft = '4px solid #f47f03';
                    this.style.color="#f47f03";
                    console.log(datas[num]);
                     initEl0();
                    // document.getElementById('c5show').innerText = datas[num];
                }
            }

        })(i);
    };
    /*以下是右边内容显示区域*/
    var right_top=document.getElementById('c5right-top');
    
}

function createLeftNavs(id){ //添加列表的小图标
    var ul_el = document.getElementById(id);
    if (data1.length != 0){
        for(var i = 0;i < data1.length;i++){
            var li = document.createElement('li');
            var b = document.createElement('b');
            var a = document.createElement('a');
            a.innerText = data1[i];
            var img_path = './sources/images/' + 'n'  + i + '.png';
            a.style.background = '#f5f3f3 url("'+img_path+'") no-repeat 10px center';
            a.style.backgroundSize="26px";
            a.setAttribute('href','javascript:void(0);');
            li.appendChild(b);
            li.appendChild(a);
            var sub_ul = document.createElement('ul');
            sub_ul.classList.add('sub-item');
            for(var j = 0;j<data2[i].length;j++){
                var s_li = document.createElement('li');
                var s_a = document.createElement('a');
                var img_paths = './sources/images/' + 'n'  + i+j + '.png';
                s_a.style.background = '#f5f3f3 url("'+img_paths+'") no-repeat 10px center';
                s_a.style.backgroundSize="26px";
                s_a.innerText = data2[i][j];
                s_a.setAttribute('href','javascript:void(0);');
                s_li.appendChild(s_a);
                sub_ul.appendChild(s_li);
            }
            li.appendChild(sub_ul);
            ul_el.appendChild(li);
        }
    }
}
function textLeft(text){//创建input框左边的文字及标签
    var lab=document.createElement('label'); //创建label标签
    lab.style.display='inline-block';
    lab.style.width='100px';
    lab.style.textAlign="right";
    var txt=text+":"; //创建文字，传递一个参数text
    lab.innerText=txt;  //将文字放入label标签中
    // 样式
    return lab; //返回该标签
}
function searchInput(text){//创建input框
    var s_input=document.createElement('input'); //创建input标签
    s_input.style.height="30px";
    s_input.setAttribute('type','text'); // 增加input的type属性及属性值
    s_input.setAttribute('placeholder',text); //增加input的value属性及属性值
    return s_input; //返回该input
}
function createlines(id,datas){  //此函数代表只有一行的时候
    // 创建外层
    var ul_wrapper=document.createElement('ul'); //创建最外层的ul
    var li_row=document.createElement('li');  //创建最外层的li
    var ul_row=document.createElement('ul');  //创建里层的ul
    for(var i=0;i<3;i++){  //循环列数，已知一行有3列即三个单元格
        var col=document.createElement('li'); //创建里层的li
        if(0==i){ //当单元格下标为0的时候，即第一个单元格
            var lab=textLeft(datas['row11']['name']); //调用input左边文字函数
            var input=searchInput(datas['row11']['val']); //调用创建input函数
            col.appendChild(lab); //将input左边的lab添加到里层的li中
            col.appendChild(input);//将input添加到里层的li中
        }else if(1==i){ //单元格下标为1的时候，即第二个单元格
            var sbtn=document.createElement('button'); //创建第一个按钮
            var abtn=document.createElement('button');//创建第二个按钮
            sbtn.innerText='搜索'; //第一个是搜索按钮
            abtn.innerText='添加';//第二个是添加按钮
            col.appendChild(sbtn); //给里层里添加搜索按钮
            col.appendChild(abtn);//给里层里添加添加按钮
        }else{ 
            col.style.display='none';//单元格下标为2，即第三个单元格，不显示
        }
        ul_row.appendChild(col); //将里层的li添加到里层的ul中
    }
    li_row.appendChild(ul_row); //将里层ul添加到外层li中
    ul_wrapper.appendChild(li_row);//将外层li添加到外层ul中
    document.getElementById(id).appendChild(ul_wrapper); //将外层的ul显示在id中
}
function createCols(id,datas){ //此函数代表多行的时候
    var cols=datas['datas'].length; //所有的单元格数量
    var rows=Math.ceil(cols/3); //根据单元格数量来确定要显示的行数
    var ul_wrapper=document.createElement('ul');//外层ul
    for(var i=0;i<rows;i++){ //循环行数
        (function(num){
            var li_row=document.createElement('li'); //外层li
            var ul_row=document.createElement('ul'); //内层ul
            for(var j=0;j<3;j++){ //循环列数
                var col=document.createElement('li'); //里层li
                col.style.display='inline-block';
                col.style.paddingTop="10px";
                // col.style.float='left'; //设置里层li浮动
                if((num*3+j)<cols){ //判断传入的单元格数是否小于总的单元格数
                    var text=textLeft(datas['datas'][num*3+j]['row']['name']);
                    var input=searchInput(datas['datas'][num*3+j]['row']['val']);
                    // num*3+j表示的是datas:[]数组的下标
                    col.appendChild(text);
                    col.appendChild(input);
                }else{
                    col.style.display='none';
                }
                ul_row.appendChild(col);
            }
            ul_row.style.overflow='auto';
            // ul_row.style.border='1px solid red';
            li_row.appendChild(ul_row);
            ul_wrapper.appendChild(li_row);
        })(i)
    }
    document.getElementById(id).appendChild(ul_wrapper);
}
function createHeader(lines,id,datas){
    switch(lines){
        case 0:
            break;
        case 1:
            {
                // 创建ul 
                createlines(id,datas)
                
            }
            break;
        default:
            {
                createCols(id,datas);
            }
            break;
    }
}
function initEl0(){
    // var dd={row11:{name:'关键字',val:'搜索'}};
    var dd0={
        datas:[
            {row:{name:'ID',val:'ID'}},
            {row:{name:'客户名称',val:'客户名称'}},
            {row:{name:'客户性质',val:'客户性质'}},
            {row:{name:'市场开发人员',val:'搜索'}},
            {row:{name:'市场维护人员',val:'搜索'}},
            {row:{name:'录入时间',val:'录入时间'}},
            {row:{name:'贷款银行',val:'录入事件'}},
            {row:{name:'收款账号',val:'录入事件'}},
            {row:{name:'开户行 ',val:'录入事件'}},
            {row:{name:'贷款银行',val:'录入事件'}},
            {row:{name:'贷款银行',val:'录入事件'}},
            {row:{name:'查询',val:'录入事件'}},
        ]
    };
    createHeader(2,'c5show_top',dd0)
}
function initEl1(){
    var dd1={
        datas:[
            {row:{name:'查询',val:'录入事件'}},
        ]
    };
    createHeader(2,'c5show_top',dd1)
}
/*以上是input框自动生成部分 */
function init(id,arg) {
    var wrapper=document.getElementById(id);
    var t_head=document.createElement('ul');
    for(var i=0;i<arg.length;i++){
        var li=document.createElement('li');
        var li_a=document.createElement('a');
        li_a.setAttribute('href','javascript:void(0);');
        if(i==0){
            var inp=document.createElement('input');
            inp.setAttribute('type','checkbox');
            inp.setAttribute('id','put');
            li_a.appendChild(inp);
            li.appendChild(li_a);
            t_head.appendChild(li);
        }else{
            li_a.innerText=arg[i];
            li.appendChild(li_a);
            t_head.appendChild(li);
        }
    }
    wrapper.appendChild(t_head);
    var content=document.createElement('div');
    content.setAttribute('id','content');
    wrapper.appendChild(content);
}
// 以上是数据表的表头部分
 var dats=["全选","ID","客户名称","押品号码","合同编码","市场开发人员","市场维护人员","部门","签约时间","芝麻分","风控验收时间","凭证号","贷款产品","贷款银行","贷款开始时间","贷款到期时间","利率周期","预收一期","还款期数","首次应还款日","计息方式","逾期日罚利率或违约金比例合计","贷款发放时间","失信被执行人","经营异常","联盟黑名单","未纠结案诉讼纠纷","银行黑名单",'操作']
  
// 以上是表头对应的数据
    function add(el,p){
        var row=document.createElement('ul');
        var li=document.createElement('li');
        var a_el=document.createElement('a');
        var inn=document.createElement('input');
        inn.setAttribute('type','checkbox');
        inn.setAttribute('class','put');
        // console.log(inn.checked);
        a_el.appendChild(inn);
        li.appendChild(a_el);
        row.appendChild(li);
        for(var i=0;i<p.length;i++){ //规定每一行输出多少个单元格
            var col=document.createElement('li');
            var a_el=document.createElement('a');
            a_el.setAttribute('href','javascript:void(0);');
            a_el.innerText=p[i];
            col.appendChild(a_el);
            row.appendChild(col); 
        }
        el.appendChild(row);
    }
    // 以上是给数据内容表增加的div增加列
    function initUI(){
        (function(){
            //1.3声明一个原生js AJAX对象
            var xhr=null;
            if(window.XMLHttpRequest){//主流浏览器自带
                xhr=new XMLHttpRequest();
                
            }else{//IE5 IE6
                xhr=new ActiveXObject('Microsoft.XMLHTTP');
            }
            //1.4配置请求
            var url='http://127.0.0.1:8885/getdata';
            xhr.open('GET',url,true);
            xhr.send();
            xhr.onreadystatechange=function(){
                if(4==xhr.readyState){
                    if(200==xhr.status){
                        // console.log(xhr.responseText);
                        //uname uid uid openBank
                        var obj=JSON.parse(xhr.responseText);
                        // console.log(obj);
                        for(var i=0;i<obj.length;i++){
                            
                            var item=obj[i];
                            // console.log(i,item['uname'],item['uid'],item['openBank'])
                            var dd=[];
                            dd.push(item['uid']);
                            dd.push(item['uname']);
                            dd.push(item['CN']);
                            dd.push(item['CN']);
                            dd.push(item['dev']);
                            dd.push(item['mbp']);
                            dd.push(item['userWorkWhere']);
                            dd.push(item['time']);
                            dd.push(item['mbp']);
                            dd.push(item['time']);
                            dd.push(item['CN']);
                            dd.push(item['dev']);
                            dd.push(item['bank']);
                            dd.push(item['time']);
                            dd.push(item['time']);
                            dd.push(item['dev']);
                            dd.push(item['mbp']);
                            dd.push(item['time']);
                            dd.push(item['CN']);
                            dd.push(item['dev']);
                            dd.push(item['bank']);
                            dd.push(item['time']);
                            dd.push(item['time']);
                            dd.push(item['dev']);
                            dd.push(item['uidnumber']);
                            dd.push(item['openBank']);
                            dd.push(item['zhanghao']);
                            // console.log(dd);
                            pages_total_data.push(dd);
                            var el=getContentWrapper();
                            showPage(el,1);
                        }
                    }
                }
            }
        })()
    }//以上是获得json数据
// 以上是数据导入部分--------------------------------------------------------------------
// 1.获取显示数据的容器
function getContentWrapper(){
    var div_content=document.getElementById('content');
    if(div_content){
        div_content.parentNode.removeChild(div_content);
    }
    var div_content=document.createElement('div');
    div_content.setAttribute('id','content');
    var table=document.getElementById('table');
    table.appendChild(div_content);
    return div_content;
}
// 2.创建页码
var currentpage=1;
function createPages(cla,pages) { 
    var div_pages=document.getElementsByClassName(cla)[0];
    // console.log(div_pages)
    var pages_ul=div_pages.getElementsByTagName('ul')[0];
    // console.log(pages_ul)
    for(var i=0;i<5;i++){
        var pages_ul_li=document.createElement('li');
        switch (i) {
            case 0:
                {
                    var li_a=document.createElement('a');
                    li_a.setAttribute('href','javascript:void(0);');
                    li_a.innerText="当前页：";
                    var li_a_span=document.createElement('span');
                    li_a_span.innerText='1';
                    li_a_span.style.color='#f47f03';
                    var li_a_span2=document.createElement('span');
                    li_a_span2.innerText='/'+pages;
                    console.log(pages.length)
                    li_a.appendChild(li_a_span);
                    li_a.appendChild(li_a_span2);
                    pages_ul_li.appendChild(li_a);
                }
                break;
            default:
                {
                    var li_a=document.createElement('a');
                    li_a.setAttribute('href','javascript:void(0);');
                    li_a.innerText=i+1;
                    pages_ul_li.appendChild(li_a);
                    // console.log(li_a.innerText) 对
                    (function(num){
                        
                        li_a.onclick=function(){
                            switch (num) {
                                case 1:   
                                    if(currentpage==1){
                                        break;
                                    }
                                    currentpage=1;
                                    break;
                                case 2:
                                    if(currentpage!=1){
                                        currentpage-=1;
                                    }else{
                                        alert('已经是第一页啦~')
                                    }
                                    break;
                                case 3:
                                    if(currentpage<pages){
                                        currentpage+=1;
                                    }else{
                                        alert('已经是最后一页啦~')
                                    }
                                    break;
                                case 4:
                                    if(currentpage==pages){
                                        break;
                                    }
                                    currentpage==pages;
                                    break;
                                default:
                                    break;
                            }
                            var el=getContentWrapper();
                            currentpage=num+1;
                            showPage(el,currentpage);
                            // console.log(el)
                        }
                    })(i);
                }
                break;
        }
        pages_ul.appendChild(pages_ul_li);
        // console.log(pages_ul)
    }
 }
 var pages_total_data=new Array();
// 显示页面内容3.
function showPage(el,page){
    for(var i=0;i<19;i++){//规定每一页显示的行数是20条
        if((pages_total_data.length)===(19*(page-1)+i)){//每一页显示的页数和数组中的下标关系是数组的下标=每页显示的数据条数*（要显示的页数-1）+每一行每个单元格的下标
            // console.log(page,pages_total_data.length,20*(page-1)+i)
            break;
        }
        // var tr=document.createElement('ul');
        // for(var j=0;j<10;j++){ //规定每一行显示的列数
        //     var td=document.createElement('li');
        //     td.innerText='td'+(i+1)+(j+1);
        //     td.style.display='inline-block';
        //     tr.appendChild(td);
        // }
        var p=pages_total_data[19*(page-1)+i]//此处声明数组的下标
        add(el,p); //el指盛放数据的容器，也就是content。在add中p的作用是规定每一行输出多少列
    }
}

    // initEl();

    // initEl()
window.onload = function () {
    createLeftNavs('main_navs');
    initTree('main_navs');
    init("table",dats);
        initUI();
        var doc=document.getElementById('put');
        var doc2=document.getElementsByClassName('put');
        doc.onclick=function(){
            for(var j=0;j<doc2.length;j++){
            doc2[j].checked=doc.checked;
            }
        }
    // function publics(){
    //     initEl();
    //     init("table",dats);
    //     initUI();
    //     var doc=document.getElementById('put');
    //     var doc2=document.getElementsByClassName('put');
    //     doc.onclick=function(){
    //         for(var j=0;j<doc2.length;j++){
    //         doc2[j].checked=doc.checked;
    //         }
    //     }
    // }
    createPages('pages',20);
    getCarsAndHourse()
    
}
function getCarsAndHourse(){
    var xhr=new XMLHttpRequest();
    var url='http://127.0.0.1:8885/data';
    xhr.open('GET',url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(4==xhr.readyState){
            if(200==xhr.status){
                var obj=JSON.parse(xhr.responseText);
                var datas={};
                var temp=new Array();
                for(var i=0;i<obj['hourses'].length;i++){
                    temp.push(obj['hourses'][i]['score']);
                }
                datas.hourses=temp;
                temp=[];
                for(var i=0;i<obj['cars'].length;i++){
                    temp.push(obj['cars'][i]['score']);
                }
                datas.cars=temp;
                drawTu(datas);
                drawTu2(datas);
            }
        }
    }
}
function drawTu(datas) { 
    var tu1=document.getElementById('data_show').getElementsByClassName('row')[1].getElementsByClassName('col')[0];
    var myBar=echarts.init(tu1);
    var option={
        title:{//图标标题
            text:'已完成业务年统计图',
            subtext:'2018年', //副标题
            left:'center'//标题所在位置
        },
        //图例
        legend:{
            data:['房贷','车贷'],
            bottom:"bottom"
        },
        tooltip:{
            trigger:'axis'
        },//通常与阴影结合使用才有效果
        //X
        xAxis:{
            data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            axisPointer:{
                type:'line'//指示器类型 当鼠标移动到指定位置时，会显示这个位置对应的具体数值
            }
        },
        //y轴
        yAxis:{
            type:'value',
            name:'单',
            min:'0',
            max:'300',
            interval:100,
            // axisLabel:{
            //     formatter:'{value}单'
            // },
            axisLine: {show:false},//去掉y轴的线条
            axisTick: {show:false},//去掉y轴的刻度线
        },
        series:[
            {
                name:'房贷',
                type:'bar',
                color:'#3db6f5',
                data:datas["hourses"],
                barWidth : "30%"
            },
            {
                name:'车贷',
                type:'bar',
                color:'#fb8005',
                data:datas['cars'],
                barWidth : "30%"
                
            },
        ]
    }
    myBar.setOption(option);
 }
 //以上是房贷车贷柱状图
 function drawTu2(datas) { 
    var tu1=document.getElementById('data_show').getElementsByClassName('row')[2].getElementsByClassName('col')[0];
    var myBar=echarts.init(tu1);
    var option={
        title:{
            text:'放款金额年统计图',
            subtext:'根据放款数据统计',
            left:'center'
        },
        //图例
        legend:{
            data:['房贷','车贷'],
            // orient:'vertical',
            bottom:"bottom",//图例的位置
            // right:'left'

        },
        tooltip:{
            trigger:'axis'
        },
        //X
        xAxis:{
            data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            axisPointer:{
                type:'shadow'
            }
        },
        //y轴
        yAxis:{
            type:'value',
            name:'单',
            nameLocation:'middle',
            nameGap:'60',
            nameRotate:'360',
            min:'0',
            max:'300',
            interval:100,
            // axisLabel:{
            //     formatter:'{value}单'
            // },
            axisLine: {show:false},//去掉y轴的线条
            axisTick: {show:false},//去掉y轴的刻度线
        },
        series:[
            {
                name:'房贷',
                type:'line',
                color:'#3db6f5',
                data:datas["hourses"],
                stack: '总量',
                barWidth : "30%",
                itemStyle:{
                    normal:{label:{show:true}}
                },//折线上显示数值
                symbol:'circle'//实心
            },
            {
                name:'车贷',
                type:'line',
                color:'#fb8005',
                data:datas['cars'],
                barWidth : "30%",
                itemStyle:{
                    normal:{label:{show:true}}
                },//折线上显示数值
                symbol:'circle'//实心

            },
        ]
    }
    myBar.setOption(option);
 }
