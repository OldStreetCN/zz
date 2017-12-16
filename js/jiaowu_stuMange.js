			/*这个变量是设置学生添加那里的最多课程只能三个*/
			var count=0;
			
			
			/*这里是设置鼠标移动到模态框上面body滚动条消失*/
			/*$(function(){
				$("#myModal").mouseover(function(){
					$("body").css("overflow","hidden");
				});
				$("#myModal").mouseleave(function(){
					$("body").css("overflow-y","auto");
				});
			});*/
			
			/*判断文本框内输入名字和电话号码*/
			$(function(){
				$(".inputserach").bind("input propertychange change",function(){
					var value=$(".studentNameSlt option:selected")
					if(value.text()=="学生姓名"){
						$(".inputserach").attr("maxlength",8);
						$(".inputserach").keyup(function(){
						});
					}else if(value.text()=="手机号"){
						$(".inputserach").attr("maxlength",11);
						$(".inputserach").keyup(function(){
							this.value=this.value.replace(/[^\d]/g,'');
						});
					}
				});
			});
			
			
			/*重置刷新*/
			$(function(){
				$("#reset").click(function(){
					window.location.reload();
				});
			});
			/*单击学生添加弹出模态框*/
			$(function(){
					$(".addStudent").click(function(){
						$("#myModal").css("display","block");
						$("#mask").css("display","block");
					});
			});
			/*单击表格详细信息弹出模态框*/
			$(function(){
				$(".tableDetailMessBtn").click(function(){
					$("#tableDetailMessModel").css("display","block");
					$("#mask").css("display","block");
				});
			});
			
			/*快速添加课程1*/
			function addDiv(event){
				if(count<3){
					var courseLableParDiv= document.getElementById("stuAddCurrChooseCourse");
					var labelArr=courseLableParDiv.childNodes;
					var m=0;
					for(var i=0;i<labelArr.length;i++){
						if(labelArr[i].innerText==window.event.srcElement.innerText){
							m=1;
						}
					}
					if(m==0){
						var courseLable=document.createElement("lable");
						courseLable.setAttribute("id","kuaisuClickLable");
						courseLableParDiv.appendChild(courseLable);
						var srcE=window.event.srcElement;//获取当前元素
						courseLable.innerHTML=srcE.innerHTML;
						/*添加当前选中的到右边*/
						var oDiv=document.createElement("div");
						var parNode=document.getElementById("currCourseDiv");
						parNode.appendChild(oDiv);
						oDiv.setAttribute("id","myChooseCourse");
						var lable1=document.createElement("lable");
						var lable2=document.createElement("lable");
						var lable3=document.createElement("lable");
						var lable4=document.createElement("lable");
						var a=document.createElement("a");
						oDiv.appendChild(lable1);
						oDiv.appendChild(lable2);
						oDiv.appendChild(lable3);
						oDiv.appendChild(lable4);
						oDiv.appendChild(a);
						lable1.setAttribute("id","myChooseCourseName");
						lable1.innerHTML="课程名";
						lable2.setAttribute("id","myClasses");
						lable2.innerHTML="班级名";
						lable3.setAttribute("id","myCourseTime");
						lable3.innerHTML="2017-11-20";
						lable4.setAttribute("id","myCourseMoney");
						lable4.innerHTML="4495";
						a.setAttribute("id","myChooseCoursedetail");
						a.innerHTML="详情";
						count=count+1;
						window.event.srcElement.style.cssText="color:#999999;border:1px solid #999999;";
						var chooseCount=document.getElementById("currChooseCourseCount");
						chooseCount.innerText=count;
					}
				}else{
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
				}
			}
			/*导航条*/
			$(function(){
				$("#tableDetailMessBannerLi1").click(function(){
					$("#tableDetailMessBannerLi1").addClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi2").removeClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi3").removeClass("tableDetailMessBannerLi0");
					$("#tableDetailMessModelMain").css("display","block");
					$("#tableStuChangeClassDiv").css("display","none");
					$("#tableGenJinMessDiv").css("display","none");
				});
			});
			$(function(){
				$("#tableDetailMessBannerLi2").click(function(){
					$("#tableDetailMessBannerLi2").addClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi1").removeClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi3").removeClass("tableDetailMessBannerLi0");
					$("#tableStuChangeClassDiv").css("display","block");
					$("#tableDetailMessModelMain").css("display","none");
					$("#tableGenJinMessDiv").css("display","none");
					
				});
			});
			$(function(){
				$("#tableDetailMessBannerLi3").click(function(){
					$("#tableDetailMessBannerLi3").addClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi1").removeClass("tableDetailMessBannerLi0");
					$("#tableDetailMessBannerLi2").removeClass("tableDetailMessBannerLi0");
					$("#tableGenJinMessDiv").css("display","block");
					$("#tableStuChangeClassDiv").css("display","none");
					$("#tableDetailMessModelMain").css("display","none");
				});
			});
			/*单机模态框关闭按钮*/
			$(function(){
				$("#closeBtn").click(function(){
					$("#myModal").css("display","none");
					$("#mask").css("display","none");
				});
			});
			$(function(){
				$("#tableDetailMessModelCloseBtn").click(function(){
					$("#tableDetailMessModel").css("display","none");
					$("#mask").css("display","none");
				});
			});
			
			/*鼠标移动到一行变色*/
			$(function(){
				$("#tableStuChangeClassTab1 td").mouseover(function(){
					$(this.parentNode).addClass("onmouseoverAddClass");
					$(this.parentNode).css("cursor","pointer");
				});
				$("#tableStuChangeClassTab1 td").mouseleave(function(){
					$(this.parentNode).removeClass("onmouseoverAddClass");
				});
			});
			$(function(){
				$("#tableStuChangeClassTab2 td").mouseover(function(){
					$(this.parentNode).addClass("onmouseoverAddClass");
					$(this.parentNode).css("cursor","pointer");
				});
				$("#tableStuChangeClassTab2 td").mouseleave(function(){
					$(this.parentNode).removeClass("onmouseoverAddClass");
				});
			});
			
			/**/
		