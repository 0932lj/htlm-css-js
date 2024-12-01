核心功能设计与实现
功能一：定时器功能
此功能运用了两种方法，setTimeout() 和clearTimeout()，其中setTimeout() 是在指定的毫秒数后调用函数或计算表达式，clearTimeout() 是指可取消由 setTimeout() 方法设置的定时操作。
![image](https://github.com/user-attachments/assets/6d27293d-3861-4812-bd67-29993700b8b0)
![image](https://github.com/user-attachments/assets/14e9100e-e475-4ef3-b186-3666bf46303d)
功能二：显示与隐藏效果
此功能运用了两种方法，show()和hide(),其中show() 是指显示隐藏的被选元素，hide() 是指隐藏被选元素。
![image](https://github.com/user-attachments/assets/bd2cfda4-cbf4-44b3-a188-a01a4da09aa9)

![image](https://github.com/user-attachments/assets/0a0a2654-d2ee-4efa-8110-6cf9de885fa2)


功能三：下拉菜单功能
利用value属性获取下拉菜单的选项然后根据选项决定div的状态，利用style.display样式隐藏或显示div。
![image](https://github.com/user-attachments/assets/7e8237b3-0154-4c5c-a25b-1c2e38bb7c45)

功能四：鼠标事件功能
其中使用的方法为click()，mouseover()，mouseout()。其中click()是指当单击元素时，发生 click 事件。mouseover()是指当鼠标指针位于元素上方时，会发生 mouseover 事件。mouseout()是指当鼠标指针离开被选元素时，会发生 mouseout 事件。
![image](https://github.com/user-attachments/assets/4f623751-1157-4c2e-98d9-fdb1d2a68dab)

功能五：Tab栏切换
css将第一个标签对应内容显示，其他的都隐藏起来，获取内容的全部元素对象，获取标签的index值，将所有内容设置隐藏$(".ul_1 li ul").hide();然后根据被点击的标签，将对应的内容显示 $(".ul_1 li ul:eq("+menuNum+")").show()。
![image](https://github.com/user-attachments/assets/19a51013-f3ad-484a-b7c0-3201768734bc)
![image](https://github.com/user-attachments/assets/01617845-f360-49db-aacc-96859956b853)



功能六：文本框输入
7.getElementById()方法可以通过指定的id来获取HTML标记，并将其返回。
![image](https://github.com/user-attachments/assets/f0363b65-ab1a-4b81-bb69-0dc245c776ae)

![image](https://github.com/user-attachments/assets/c4bdeb23-28ec-4682-bdee-47d870492771)
