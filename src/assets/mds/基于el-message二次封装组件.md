## el-message改造

![image-20230508152114729](C:\Users\21025\AppData\Roaming\Typora\typora-user-images\image-20230508152114729.png)

在最右边添加业务需求，加入分类功能

废话不多说 直接上代码

```js
this.$message(this.renderCollectMessage());

renderCollectMessage() {
 const h = this.$createElement;
  return {
   type: 'success',
   customClass: 'collectClassMessage',
   duration: this.flagShowAddClassDialog === 1 ? 0 : 3000,
   showClose: this.flagShowAddClassDialog === 1 ? true : false,
   message: h('div', { class: 'el-message__content' }, [
     h('strong', null, '收藏成功'),
      h('el-dropdown', {
       props: {
        trigger: 'click',
        placement: 'top-start',
        'hide-on-click': false,
       },
       ref: 'dropdownclass',
       on: {
        // 下拉菜单点击时
        command: async (command) => {
         if (command === 'addclass') {
           // 点击新增分类时，隐藏消息提示和分类下拉菜单，目的是为了后续新增分类操作时，重新获取到全部分类并渲染
           this.$refs.dropdownclass.hide();
           this.messageJoin.close();
           this.addClassVisible = true;
         } else {
           /**
            * 拿到点击分类信息
            */
           await tableIntoCustomClass(this.tblId, command.id)
           // 手动隐藏dropdown组件 与message同时关闭，不然交互体验差差差
           this.$refs.dropdownclass.hide();
           this.messageJoin.close();
           this.$message.success(`已加入${command.name}分类`);
         };
        },
        // 下拉菜单显示/隐藏时
        'visible-change': (val) => {
          // 隐藏状态 && 没有点击具体分类 直接关闭message
          // if (!toClassCollectMessage && !val) messageJoin.close();
              }
            }
         }, [
            h('span', { class: 'el-dropdown-link joinClass' }, [
              h('span', {
                on: {
                  click: () => {
                    // 点击加入分类 让当前message不消失 显示下拉菜单
                    this.messageJoin.duration = 0;
                    this.messageJoin.showClose = true;
                  }
                }
              }, '加入分类'),
              h('i', {
                class: 'el-icon-arrow-right'
              }, null)
            ]),
            // 注入所有的分类菜单
            h('el-dropdown-menu', {
              props: {
                slot: 'dropdown',
              },
              class: 'classDropdown',
            },// * 遍历生成分类菜单,(业务需求：使用div包裹 超出高度出现滚动条
              [h('div', { class: 'AddClassTables' },
                [...this.dropdownsItem.map((item) => {
                  let hi = h('el-dropdown-item', {
                    props: {
                      command: item
                    }
                  }, item.name);
                  return hi
                })]
              ), h('el-dropdown-item', { // * 同时注入新建分类组件
                props: {
                  command: 'addclass',
                  divided: true,
                  icon: 'el-icon-plus'
                },
                class: 'addCollectClassBtn',
              }, '新增分类')]
            ),
          ]),
        ]),
        onClose: () => {
          // 当消息提示框关闭时，恢复默认值
          this.flagShowAddClassDialog = 0;
        },
  };
},
```

