        // 계열사 선택시 선택된 노드 정보를 받아와서 이벤트 처리하는 부분
        function get_selected_menu(data) {
            var id = data.instance.get_node(data.selected).id; // COM_SYS_SN
            var parent = data.instance.get_node(data.selected).parent; // UP_COM_SYS_SN
            var nodekey = 'COM'+id; // node id 
            console.log('id =',id)
            console.log('parent =',parent)
            console.log('nodekey =',nodekey)
        }
        // select box 선택시 노드 정보를 받아와서 이벤트 처리하는 부분
        function get_selected_opts(event) {
            var id = event.target.id;
            var parent = event.target.title;

            console.log('id = ',id)
            console.log('부서명 = ',parent)
        }

        $(document).ready(function () {
            // 셀렉트 박스 클릭
            $('.select-label').click(function () {
                $('.select-box').toggleClass('selected');
                $('.option').toggle();
            });

            // 셀렉트 옵션 선택
            $('.option-item').click(function () {
                $('.select-box').removeClass('selected');
                $('.option').toggle();
                $('.select-label').text(this.id);  // 라벨에 선택값 넣기
                $('#select-input').val(this.id);  // input에 선택값 넣기
            });

            // 부서추가 버튼 클릭 이벤트
            $('#btn-add-dept').click(function() {
                alert('부서추가 팝업 작업 예정');
            });

            // 사원등록 버튼 클릭 이벤트
            $('#btn-add-emp').click(function() {
                alert('사원등록 팝업 작업 예정');
            });
        });

        $(document).ready(function(){
         
            let jsoninfo=[]; // json data중 jstree에 필요한 정보만 담을 배열
            // 데이터 바인딩하는 부분입니다. 현재는 전달받은 json data load
            $.getJSON("../../../../resources/db/group.json",function(data){
                let menu_list=[];
                let json=[];
             data.map(item => {
                    item.lstItems.map(item2=>{
                        item2.lstItems.map(item3=>{
                            item3.lstItems.map(item4=>{
                                item4.lstItems.map(item5=>{
                                    if(!item5.ID.includes('USR')) {
                                        const tmp5 = {text: item5.Header, id: item5.COM_SYS_SN , parent: item5.UP_COM_SYS_SN}; 
                                        jsoninfo.push(tmp5);
                                    }
                                });
                                if(!item4.ID.includes('USR')) {
                                    const tmp4 = {text: item4.Header, id: item4.COM_SYS_SN , parent: item4.UP_COM_SYS_SN};                 
                                    jsoninfo.push(tmp4);
                                }
                            });
                            if(!item3.ID.includes('USR')) {
                                const tmp3 = {text: item3.Header, id: item3.COM_SYS_SN , parent: item3.UP_COM_SYS_SN};              
                                jsoninfo.push(tmp3);
                                
                            }
                        })
                        if(!item2.ID.includes('USR')) {
                            const tmp2 = {text: item2.Header, id: item2.COM_SYS_SN , parent: item2.UP_COM_SYS_SN}; 
                            jsoninfo.push(tmp2)
                        }
                    })
                    const tmp1 = {text: item.Header, id: item.COM_SYS_SN , parent: "#"}; 
                    if(!item.ID.includes('USR')) {
                        jsoninfo.push(tmp1)
                        menu_list+="<li class=\"option-item\" id=\""+item.COM_SYS_SN+"\" title=\""+item.Header+"\" onclick=\"get_selected_opts(event)\">"+item.Header+"</li>";
                    }
                });
                // 부서 정보만 모은 배열을 객체화하여 jstree로 조직도 생성
                let aff = Object.assign(jsoninfo);
                $('#jstree').jstree({
                'core' : {
                    check_callback: true,
                    data: aff,
                    themes: { dots:false},
                },
                'checkbox' : {
                    "keep_selected_style" : false
                },
                // dnd = drag and drop, search = 검색 옵션
                'plugins' : ["dnd","search"],
                'group' : {
                    'jstree-leaf' : false

                },
                'search' : {
                    "show_only_matches":true,
                    "show_only_matches_children":true,
                }
            })
            .bind("open_node.jstree", function(event, date) {
                let parentId = event.target;
                let temp = document.createElement('i');
                parentId.appendChild(temp)
                temp.setAttribute('src','../../../../resources/svgs/Icon_arrowdown16.svg')
            })
            $("#jstree").append(menu_list);
            $("#select-options").append(menu_list);
            });
           
        });
        // jstree click handling
        $('#jstree').on('select_node.jstree', function (e, data) {
                data.instance.toggle_node(data.node);
                get_selected_menu(data)
        });
        $(function () { 
            $('#jstree').on("changed.jstree", function (e, data) {
            });
            $('button').on('click', function () {
            $('#jstree').jstree(true).select_node('child_node_1');
            $('#jstree').jstree('select_node', 'child_node_1');
            $.jstree.reference('#jstree').select_node('child_node_1');
            });
        });

        $(document).ready(function() {
            // nav menu 클릭 이벤트 처리 부분, 진행중
            $('.nav-list > li').click(function() {
                var temp=$(this).attr('id');
                var selected=$(temp).find('ol');
                console.log(selected);
                // if(temp.hasClass('hide')) {
                //     $('.nav-list-2nd').removeClass('hide');
                // }
                // else {
                //     $('.nav-list-2nd').addClass('hide');
                // }
            })
        })