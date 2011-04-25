SC.stringsFor("English",{"_New File":"New File","_New Folder":"New Folder",_Delete:"Delete","_Top:":"Top:","_Left:":"Left:","_Bottom:":"Bottom:","_Right:":"Right:","_Width:":"Width:","_Height:":"Height:","_Class Names:":"Class Names:","_Background Color:":"Background Color:","_New Page File":"New Page File","_Anchor:":"Anchor:","_Dimensions:":"Dimensions:","_Left:":"Left:","_Width:":"Width:","_Right:":"Right:","_Center X:":"Center X:","_Center Y:":"Center Y:","_Top:":"Top:","_Bottom:":"Bottom:","_Height:":"Height:",_Cancel:"Cancel",_Create:"Create","_File Path:":"File Path:","_File Name:":"File Name:","_Page Name:":"Page Name:","_New Page File":"New Page File","_MyApp.mainPage":"MyApp.mainPage","_main_page.js":"main_page.js","_Edit Property:":"Edit Property:","_Key:":"Key:","_Value:":"Value:",_Update:"Update","_Type:":"Type:",_String:"String",_Array:"Array",_Boolean:"Boolean",_Number:"Number",_Function:"Function",_Hash:"Hash",_Object:"Object",_Class:"Class",_Undefined:"Undefined",_Null:"Null",_Class:"Class",_Save:"Save",_Run:"Run",_Library:"Library",_Add:"Add","_Add a Custom Designer to the Library":"Add a Custom Designer to the Library","_MyApp.AwesomeView":"MyApp.AwesomeView","_Class Name:":"Class Name:","_Default Properties:":"Default Properties:","_Item Name":"Item Name",_somethingCool:"somethingCool","_Add View":"Add View","_Specifiy Keys":"Specifiy Keys",_To:"To",_From:"From","_Add Page...":"Add Page...",_Project:"Project","_Dock Library":"Dock Library","_Dock Inspector":"Dock Inspector",_Actions:"Actions",_Inspector:"Inspector","_Reload App":"Reload App","_Target:":"Target:","_Design Type:":"Design Type:",_Remove:"Remove","_iPhone Hrz":"iPhone Hrz","_iPhone Vrt":"iPhone Vrt","_iPad Hrz":"iPad Hrz","_iPad Vrt":"iPad Vrt","_Page Size":"Page Size",_Full:"Full"});
SC.DEFAULT_TREE="main";Greenhouse=SC.Object.create(SC.StatechartManager,{NAMESPACE:"Greenhouse",VERSION:"0.1.0",FILE:"file",DIR:"dir",store:SC.Store.create().from("Greenhouse.DataSource"),monitorIsActive:YES,loadIframeWithPage:function(firstTime){var c=Greenhouse.fileController.get("content"),iframe=Greenhouse.get("iframe"),namespace,page;
var r=c.get("pageRegex"),mainPane;namespace=r[1];page=r[2];if(namespace&&page&&iframe){if(iframe[namespace]&&!iframe[namespace][page]){iframe.eval(c.get("body"))
}namespace=iframe[namespace];if(firstTime){mainPane=iframe.SC.designPage.get("designMainPane");
mainPane.append()}namespace[page].set("needsDesigner",YES);this.pageController.set("content",namespace[page]);
iframe.SC.RunLoop.begin();if(!firstTime){iframe.SC.designController.set("content",null)
}iframe.SC.designsController.setDesigns(namespace[page],iframe);iframe.SC.designPage.designMainPane.viewList.contentView.set("content",Greenhouse.iframe.SC.designsController.get("content"));
iframe.SC.RunLoop.end()}}});if(typeof CHANCE_SLICES==="undefined"){var CHANCE_SLICES=[]
}CHANCE_SLICES=CHANCE_SLICES.concat([]);function js_beautify(js_source_text,options){var input,output,token_text,last_type,last_text,last_last_text,last_word,flags,flag_store,indent_string;
var whitespace,wordchar,punct,parser_pos,line_starters,digits;var prefix,token_type,do_block_just_closed;
var wanted_newline,just_added_newline,n_newlines;options=options?options:{};var opt_braces_on_own_line=options.braces_on_own_line?options.braces_on_own_line:false;
var opt_indent_size=options.indent_size?options.indent_size:2;var opt_indent_char=options.indent_char?options.indent_char:" ";
var opt_preserve_newlines=typeof options.preserve_newlines==="undefined"?true:options.preserve_newlines;
var opt_indent_level=options.indent_level?options.indent_level:0;var opt_space_after_anon_function=options.space_after_anon_function==="undefined"?false:options.space_after_anon_function;
var opt_keep_array_indentation=typeof options.keep_array_indentation==="undefined"?true:options.keep_array_indentation;
just_added_newline=false;var input_length=js_source_text.length;function trim_output(){while(output.length&&(output[output.length-1]===" "||output[output.length-1]===indent_string)){output.pop()
}}function print_newline(ignore_repeated){flags.eat_next_space=false;if(opt_keep_array_indentation&&is_array(flags.mode)){return
}ignore_repeated=typeof ignore_repeated==="undefined"?true:ignore_repeated;flags.if_line=false;
trim_output();if(!output.length){return}if(output[output.length-1]!=="\n"||!ignore_repeated){just_added_newline=true;
output.push("\n")}for(var i=0;i<flags.indentation_level;i+=1){output.push(indent_string)
}}function print_single_space(){if(flags.eat_next_space){flags.eat_next_space=false;
return}var last_output=" ";if(output.length){last_output=output[output.length-1]}if(last_output!==" "&&last_output!=="\n"&&last_output!==indent_string){output.push(" ")
}}function print_token(){just_added_newline=false;flags.eat_next_space=false;output.push(token_text)
}function indent(){flags.indentation_level+=1}function remove_indent(){if(output.length&&output[output.length-1]===indent_string){output.pop()
}}function set_mode(mode){if(flags){flag_store.push(flags)}flags={mode:mode,var_line:false,var_line_tainted:false,var_line_reindented:false,in_html_comment:false,if_line:false,in_case:false,eat_next_space:false,indentation_baseline:-1,indentation_level:(flags?flags.indentation_level+(flags.var_line_reindented?1:0):opt_indent_level)}
}function is_expression(mode){return mode==="[EXPRESSION]"||mode==="[INDENTED-EXPRESSION]"||mode==="(EXPRESSION)"
}function is_array(mode){return mode==="[EXPRESSION]"||mode==="[INDENTED-EXPRESSION]"
}function restore_mode(){do_block_just_closed=flags.mode==="DO_BLOCK";if(flag_store.length>0){flags=flag_store.pop()
}}function in_array(what,arr){for(var i=0;i<arr.length;i+=1){if(arr[i]===what){return true
}}return false}function is_ternary_op(){var level=0,colon_count=0;for(var i=output.length-1;
i>=0;i--){switch(output[i]){case":":if(level===0){colon_count++}break;case"?":if(level===0){if(colon_count===0){return true
}else{colon_count--}}break;case"{":if(level===0){return false}level--;break;case"(":case"[":level--;
break;case")":case"]":case"}":level++;break}}}function get_next_token(){n_newlines=0;
if(parser_pos>=input_length){return["","TK_EOF"]}wanted_newline=false;var c=input.charAt(parser_pos);
parser_pos+=1;var keep_whitespace=opt_keep_array_indentation&&is_array(flags.mode);
if(keep_whitespace){var whitespace_count=0;while(in_array(c,whitespace)){if(c==="\n"){trim_output();
output.push("\n");just_added_newline=true;whitespace_count=0}else{if(c==="\t"){whitespace_count+=4
}else{whitespace_count+=1}}if(parser_pos>=input_length){return["","TK_EOF"]}c=input.charAt(parser_pos);
parser_pos+=1}if(flags.indentation_baseline===-1){flags.indentation_baseline=whitespace_count
}if(just_added_newline){for(var i=0;i<flags.indentation_level+1;i+=1){output.push(indent_string)
}if(flags.indentation_baseline!==-1){for(var i=0;i<whitespace_count-flags.indentation_baseline;
i++){output.push(" ")}}}}else{while(in_array(c,whitespace)){if(c==="\n"){n_newlines+=1
}if(parser_pos>=input_length){return["","TK_EOF"]}c=input.charAt(parser_pos);parser_pos+=1
}if(opt_preserve_newlines){if(n_newlines>1){for(var i=0;i<n_newlines;i+=1){print_newline(i===0);
just_added_newline=true}}}wanted_newline=n_newlines>0}if(in_array(c,wordchar)){if(parser_pos<input_length){while(in_array(input.charAt(parser_pos),wordchar)){c+=input.charAt(parser_pos);
parser_pos+=1;if(parser_pos===input_length){break}}}if(parser_pos!==input_length&&c.match(/^[0-9]+[Ee]$/)&&(input.charAt(parser_pos)==="-"||input.charAt(parser_pos)==="+")){var sign=input.charAt(parser_pos);
parser_pos+=1;var t=get_next_token(parser_pos);c+=sign+t[0];return[c,"TK_WORD"]}if(c==="in"){return[c,"TK_OPERATOR"]
}if(wanted_newline&&last_type!=="TK_OPERATOR"&&!flags.if_line&&(opt_preserve_newlines||last_text!=="var")){print_newline()
}return[c,"TK_WORD"]}if(c==="("||c==="["){return[c,"TK_START_EXPR"]}if(c===")"||c==="]"){return[c,"TK_END_EXPR"]
}if(c==="{"){return[c,"TK_START_BLOCK"]}if(c==="}"){return[c,"TK_END_BLOCK"]}if(c===";"){return[c,"TK_SEMICOLON"]
}if(c==="/"){var comment="";var inline_comment=true;if(input.charAt(parser_pos)==="*"){parser_pos+=1;
if(parser_pos<input_length){while(!(input.charAt(parser_pos)==="*"&&input.charAt(parser_pos+1)&&input.charAt(parser_pos+1)==="/")&&parser_pos<input_length){c=input.charAt(parser_pos);
comment+=c;if(c==="\x0d"||c==="\x0a"){inline_comment=false}parser_pos+=1;if(parser_pos>=input_length){break
}}}parser_pos+=2;if(inline_comment){return["/*"+comment+"*/","TK_INLINE_COMMENT"]
}else{return["/*"+comment+"*/","TK_BLOCK_COMMENT"]}}if(input.charAt(parser_pos)==="/"){comment=c;
while(input.charAt(parser_pos)!=="\x0d"&&input.charAt(parser_pos)!=="\x0a"){comment+=input.charAt(parser_pos);
parser_pos+=1;if(parser_pos>=input_length){break}}parser_pos+=1;if(wanted_newline){print_newline()
}return[comment,"TK_COMMENT"]}}if(c==="'"||c==='"'||(c==="/"&&((last_type==="TK_WORD"&&in_array(last_text,["return","do"]))||(last_type==="TK_START_EXPR"||last_type==="TK_START_BLOCK"||last_type==="TK_END_BLOCK"||last_type==="TK_OPERATOR"||last_type==="TK_EQUALS"||last_type==="TK_EOF"||last_type==="TK_SEMICOLON")))){var sep=c;
var esc=false;var resulting_string=c;if(parser_pos<input_length){if(sep==="/"){var in_char_class=false;
while(esc||in_char_class||input.charAt(parser_pos)!==sep){resulting_string+=input.charAt(parser_pos);
if(!esc){esc=input.charAt(parser_pos)==="\\";if(input.charAt(parser_pos)==="["){in_char_class=true
}else{if(input.charAt(parser_pos)==="]"){in_char_class=false}}}else{esc=false}parser_pos+=1;
if(parser_pos>=input_length){return[resulting_string,"TK_STRING"]}}}else{while(esc||input.charAt(parser_pos)!==sep){resulting_string+=input.charAt(parser_pos);
if(!esc){esc=input.charAt(parser_pos)==="\\"}else{esc=false}parser_pos+=1;if(parser_pos>=input_length){return[resulting_string,"TK_STRING"]
}}}}parser_pos+=1;resulting_string+=sep;if(sep==="/"){while(parser_pos<input_length&&in_array(input.charAt(parser_pos),wordchar)){resulting_string+=input.charAt(parser_pos);
parser_pos+=1}}return[resulting_string,"TK_STRING"]}if(c==="#"){var sharp="#";if(parser_pos<input_length&&in_array(input.charAt(parser_pos),digits)){do{c=input.charAt(parser_pos);
sharp+=c;parser_pos+=1}while(parser_pos<input_length&&c!=="#"&&c!=="=");if(c==="#"){}else{if(input.charAt(parser_pos)=="["&&input.charAt(parser_pos+1)==="]"){sharp+="[]";
parser_pos+=2}else{if(input.charAt(parser_pos)=="{"&&input.charAt(parser_pos+1)==="}"){sharp+="{}";
parser_pos+=2}}}return[sharp,"TK_WORD"]}}if(c==="<"&&input.substring(parser_pos-1,parser_pos+3)==="<!--"){parser_pos+=3;
flags.in_html_comment=true;return["<!--","TK_COMMENT"]}if(c==="-"&&flags.in_html_comment&&input.substring(parser_pos-1,parser_pos+2)==="-->"){flags.in_html_comment=false;
parser_pos+=2;if(wanted_newline){print_newline()}return["-->","TK_COMMENT"]}if(in_array(c,punct)){while(parser_pos<input_length&&in_array(c+input.charAt(parser_pos),punct)){c+=input.charAt(parser_pos);
parser_pos+=1;if(parser_pos>=input_length){break}}if(c==="="){return[c,"TK_EQUALS"]
}else{return[c,"TK_OPERATOR"]}}return[c,"TK_UNKNOWN"]}indent_string="";while(opt_indent_size>0){indent_string+=opt_indent_char;
opt_indent_size-=1}input=js_source_text;last_word="";last_type="TK_START_EXPR";last_text="";
last_last_text="";output=[];do_block_just_closed=false;whitespace="\n\r\t ".split("");
wordchar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split("");
digits="0123456789".split("");punct="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= ::".split(" ");
line_starters="continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(",");
flag_store=[];set_mode("BLOCK");parser_pos=0;while(true){var t=get_next_token(parser_pos);
token_text=t[0];token_type=t[1];if(token_type==="TK_EOF"){break}switch(token_type){case"TK_START_EXPR":if(token_text==="["){if(last_type==="TK_WORD"||last_text===")"){if(in_array(last_text,line_starters)){print_single_space()
}set_mode("(EXPRESSION)");print_token();break}if(flags.mode==="[EXPRESSION]"||flags.mode==="[INDENTED-EXPRESSION]"){if(last_last_text==="]"&&last_text===","){if(flags.mode==="[EXPRESSION]"){flags.mode="[INDENTED-EXPRESSION]";
if(!opt_keep_array_indentation){indent()}}set_mode("[EXPRESSION]");if(!opt_keep_array_indentation){print_newline()
}}else{if(last_text==="["){if(flags.mode==="[EXPRESSION]"){flags.mode="[INDENTED-EXPRESSION]";
if(!opt_keep_array_indentation){indent()}}set_mode("[EXPRESSION]");if(!opt_keep_array_indentation){print_newline()
}}else{set_mode("[EXPRESSION]")}}}else{set_mode("[EXPRESSION]")}}else{set_mode("(EXPRESSION)")
}if(last_text===";"||last_type==="TK_START_BLOCK"){print_newline()}else{if(last_type==="TK_END_EXPR"||last_type==="TK_START_EXPR"||last_type==="TK_END_BLOCK"){}else{if(last_type!=="TK_WORD"&&last_type!=="TK_OPERATOR"){print_single_space()
}else{if(last_word==="function"){if(opt_space_after_anon_function){print_single_space()
}}else{if(in_array(last_text,line_starters)||last_text==="catch"){print_single_space()
}}}}}print_token();break;case"TK_END_EXPR":if(token_text==="]"){if(opt_keep_array_indentation){if(last_text==="}"){remove_indent();
print_token();restore_mode();break}}else{if(flags.mode==="[INDENTED-EXPRESSION]"){if(last_text==="]"){restore_mode();
print_newline();print_token();break}}}}restore_mode();print_token();break;case"TK_START_BLOCK":if(last_word==="do"){set_mode("DO_BLOCK")
}else{set_mode("BLOCK")}if(opt_braces_on_own_line){if(last_type!=="TK_OPERATOR"){print_newline(true)
}print_token();indent()}else{if(last_type!=="TK_OPERATOR"&&last_type!=="TK_START_EXPR"){if(last_type==="TK_START_BLOCK"){print_newline()
}else{print_single_space()}}indent();print_token()}break;case"TK_END_BLOCK":restore_mode();
if(opt_braces_on_own_line){print_newline();if(flags.var_line_reindented){output.push(indent_string)
}print_token()}else{if(last_type==="TK_START_BLOCK"){if(just_added_newline){remove_indent()
}else{trim_output()}}else{print_newline();if(flags.var_line_reindented){output.push(indent_string)
}}print_token()}break;case"TK_WORD":if(do_block_just_closed){print_single_space();
print_token();print_single_space();do_block_just_closed=false;break}if(token_text==="function"){if((just_added_newline||last_text==";")&&last_text!=="{"){n_newlines=just_added_newline?n_newlines:0;
for(var i=0;i<2-n_newlines;i++){print_newline(false)}}}if(token_text==="case"||token_text==="default"){if(last_text===":"){remove_indent()
}else{flags.indentation_level--;print_newline();flags.indentation_level++}print_token();
flags.in_case=true;break}prefix="NONE";if(last_type==="TK_END_BLOCK"){if(!in_array(token_text.toLowerCase(),["else","catch","finally"])){prefix="NEWLINE"
}else{if(opt_braces_on_own_line){prefix="NEWLINE"}else{prefix="SPACE";print_single_space()
}}}else{if(last_type==="TK_SEMICOLON"&&(flags.mode==="BLOCK"||flags.mode==="DO_BLOCK")){prefix="NEWLINE"
}else{if(last_type==="TK_SEMICOLON"&&is_expression(flags.mode)){prefix="SPACE"}else{if(last_type==="TK_STRING"){prefix="NEWLINE"
}else{if(last_type==="TK_WORD"){prefix="SPACE"}else{if(last_type==="TK_START_BLOCK"){prefix="NEWLINE"
}else{if(last_type==="TK_END_EXPR"){print_single_space();prefix="NEWLINE"}}}}}}}if(last_type!=="TK_END_BLOCK"&&in_array(token_text.toLowerCase(),["else","catch","finally"])){print_newline()
}else{if(in_array(token_text,line_starters)||prefix==="NEWLINE"){if(last_text==="else"){print_single_space()
}else{if((last_type==="TK_START_EXPR"||last_text==="="||last_text===",")&&token_text==="function"){}else{if(last_text==="return"||last_text==="throw"){print_single_space()
}else{if(last_type!=="TK_END_EXPR"){if((last_type!=="TK_START_EXPR"||token_text!=="var")&&last_text!==":"){if(token_text==="if"&&last_word==="else"&&last_text!=="{"){print_single_space()
}else{print_newline()}}}else{if(in_array(token_text,line_starters)&&last_text!==")"){print_newline()
}}}}}}else{if(prefix==="SPACE"){print_single_space()}}}print_token();last_word=token_text;
if(token_text==="var"){flags.var_line=true;flags.var_line_tainted=false}if(token_text==="if"||token_text==="else"){flags.if_line=true
}break;case"TK_SEMICOLON":print_token();flags.var_line=false;break;case"TK_STRING":if(last_type==="TK_START_BLOCK"||last_type==="TK_END_BLOCK"||last_type==="TK_SEMICOLON"){print_newline()
}else{if(last_type==="TK_WORD"){print_single_space()}}print_token();break;case"TK_EQUALS":if(flags.var_line){flags.var_line_tainted=true
}print_single_space();print_token();print_single_space();break;case"TK_OPERATOR":var space_before=true;
var space_after=true;if(flags.var_line&&token_text===","&&(is_expression(flags.mode))){flags.var_line_tainted=false
}if(flags.var_line){if(token_text===","){if(flags.var_line_tainted){print_token();
print_newline();output.push(indent_string);flags.var_line_reindented=true;flags.var_line_tainted=false;
break}else{flags.var_line_tainted=false}}}if(last_text==="return"||last_text==="throw"){print_single_space();
print_token();break}if(token_text===":"&&flags.in_case){print_token();print_newline();
flags.in_case=false;break}if(token_text==="::"){print_token();break}if(token_text===","){if(flags.var_line){if(flags.var_line_tainted){print_token();
print_newline();flags.var_line_tainted=false}else{print_token();print_single_space()
}}else{if(last_type==="TK_END_BLOCK"&&flags.mode!=="(EXPRESSION)"){print_token();
print_newline()}else{if(flags.mode==="BLOCK"){print_token();print_newline()}else{print_token();
print_single_space()}}}break}else{if(in_array(token_text,["--","++","!"])||(in_array(token_text,["-","+"])&&(in_array(last_type,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||in_array(last_text,line_starters)))){space_before=false;
space_after=false;if(last_text===";"&&is_expression(flags.mode)){space_before=true
}if(last_type==="TK_WORD"&&in_array(last_text,line_starters)){space_before=true}if(flags.mode==="BLOCK"&&(last_text==="{"||last_text===";")){print_newline()
}}else{if(token_text==="."){space_before=false}else{if(token_text===":"){if(!is_ternary_op()){space_before=false
}}}}}if(space_before){print_single_space()}print_token();if(space_after){print_single_space()
}if(token_text==="!"){}break;case"TK_BLOCK_COMMENT":var lines=token_text.split(/\x0a|\x0d\x0a/);
print_newline();output.push(lines[0]);for(var i=1,l=lines.length;i<l;i++){print_newline();
output.push(" ");output.push(lines[i].replace(/^\s\s*|\s\s*$/,""))}print_newline();
break;case"TK_INLINE_COMMENT":print_single_space();print_token();if(is_expression(flags.mode)){print_single_space()
}else{print_newline()}break;case"TK_COMMENT":if(wanted_newline){print_newline()}else{print_single_space()
}print_token();print_newline();break;case"TK_UNKNOWN":print_token();break}last_last_text=last_text;
last_type=token_type;last_text=token_text}return output.join("").replace(/[\n ]+$/,"")
}Greenhouse.designController=SC.ObjectController.create({contentBinding:"Greenhouse.pageController*designController.selection",contentBindingDefault:SC.Binding.single().oneWay(),propertySelection:null});
Greenhouse.fileController=SC.ObjectController.create({contentBinding:"Greenhouse.filesController.selection",contentBindingDefault:SC.Binding.single(),_content_statusDidChange:function(){var c=this.get("content");
if(c&&c.get("isPage")){this.invokeOnce(function(){Greenhouse.sendAction("fileSelectedIsAPage");
Greenhouse.sendAction("cancel")})}else{if(c&&!c.get("isPage")){this.invokeOnce(function(){Greenhouse.sendAction("fileSelectedIsNotAPage")
})}}}.observes("*content.body")});Greenhouse.filesController=SC.TreeController.create(SC.CollectionViewDelegate,{collectionViewValidateDragOperation:function(view,drag,op,proposedInsertionIndex,proposedDropOperation){return SC.DRAG_ANY
},collectionViewPerformDragOperation:function(view,drag,op,proposedInsertionIndex,proposedDropOperation){console.log("delegate works");
return SC.DRAG_NONE},treeItemChildrenKey:"contents",reload:function(){var fileQuery=Greenhouse.FILES_QUERY,target=Greenhouse.targetController.get("content");
fileQuery.set("urlPath",target.get("name"));var files=Greenhouse.store.find(fileQuery),root=SC.Object.create({treeItemIsExpanded:YES});
root.set("contents",files);this.set("content",root)}});Greenhouse.layoutController=SC.ObjectController.create({contentBinding:"Greenhouse.pageController.designController.selection",allowsMultipleContent:YES,hDimNowShowing:function(){var loc=this.get("anchorLocation"),K=SC.ViewDesigner,ret="leftDimensions";
if(loc&K.ANCHOR_LEFT){ret="leftDimensions"}else{if(loc&K.ANCHOR_RIGHT){ret="rightDimensions"
}else{if(loc&K.ANCHOR_CENTERX){ret="centerXDimensions"}else{if(loc&K.ANCHOR_WIDTH){ret="widthDimensions"
}}}}return ret}.property("anchorLocation").cacheable(),vDimNowShowing:function(){var loc=this.get("anchorLocation"),K=SC.ViewDesigner,ret="topDimensions";
if(loc&K.ANCHOR_TOP){ret="topDimensions"}else{if(loc&K.ANCHOR_BOTTOM){ret="bottomDimensions"
}else{if(loc&K.ANCHOR_CENTERY){ret="centerYDimensions"}else{if(loc&K.ANCHOR_HEIGHT){ret="heightDimensions"
}}}}return ret}.property("anchorLocation").cacheable()});Greenhouse.libraryController=SC.TreeController.create(SC.CollectionViewDelegate,{reload:function(){var configQuery=Greenhouse.CONFIG_QUERY,target=Greenhouse.targetController.get("content");
configQuery.set("app",target.get("name"));var files=Greenhouse.store.find(configQuery),root=SC.Object.create({treeItemIsExpanded:YES});
root.set("contents",files);this.set("content",root)},views:SC.outlet("content.treeItemChildren.0.treeItemChildren"),collectionViewShouldBeginDrag:function(view){return YES
},collectionViewDragDataTypes:function(view){return["SC.Object"]},collectionViewDragDataForType:function(view,drag,dataType){var ret=(dataType==="SC.Object")?this.get("selection").firstObject():null;
return ret},ghostActsLikeCursor:YES,collectionViewDragViewFor:function(view,dragContent){var selectedItemIndex=dragContent.firstObject();
var itemView=view.itemViewForContentIndex(selectedItemIndex);return itemView},ghostActsLikeCursor:YES,search:null,searchResults:[],searchKey:"name",iconKey:"icon",nameKey:"name",init:function(){arguments.callee.base.apply(this,arguments);
this.set("searchResults",[]);this._runSearch()},_searchDidChange:function(){this._runSearch()
}.observes("search","content"),_sanitizeSearchString:function(str){var specials=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
var s=new RegExp("(\\"+specials.join("|\\")+")","g");return str.replace(s,"\\$1")
},_runSearch:function(){var searchResults=[];var search=this.get("search");var c=this.get("content");
if(search===null||search===""||search===undefined){this.set("searchResults",c)}else{search=this._sanitizeSearchString(search).toLowerCase();
var searchRegex=new RegExp(search,"i");var searchKey=this.get("searchKey");this._iconKey=this.get("iconKey");
this._nameKey=this.get("nameKey");searchResults=this._runSearchOnItem(c,search,searchRegex,searchKey);
var searchedTree=SC.Object.create({treeItemIsExpanded:YES,treeItemChildren:searchResults});
this.set("searchResults",searchedTree)}},_runSearchOnItem:function(treeItem,search,searchRegex,searchKey){var searchMatches=[],iconKey=this.get("iconKey"),searchedList,key,searchLen,children,nameKey=this._nameKey,that;
if(SC.none(treeItem)){return searchMatches}children=treeItem.get("treeItemChildren");
if(!children){children=treeItem.get("children")}that=this;children.forEach(function(child){if(child.treeItemChildren){var searchedList=that._runSearchOnItem(child,search,searchRegex,searchKey);
searchedList.forEach(function(m){searchMatches.push(m)})}if(searchKey&&child.get(searchKey)){key=child.get(searchKey).toLowerCase();
if(key.match(searchRegex)){var match=SC.Object.create({});match[searchKey]=child.get(searchKey);
match[nameKey]=child.get(nameKey);match.treeItem=child;match.icon=child.get(this._iconKey);
searchMatches.push(match)}}});return searchMatches}});Greenhouse.pageController=SC.ObjectController.create({});
Greenhouse.propertyController=SC.ObjectController.create({contentBinding:"Greenhouse.designController.propertySelection",contentBindingDefault:SC.Binding.single()});
Greenhouse.propertyEditorController=SC.ObjectController.create({});Greenhouse.targetController=SC.ObjectController.create({contentBinding:"Greenhouse.targetsController.selection",contentBindingDefault:SC.Binding.single()});
Greenhouse.targetsController=SC.ArrayController.create({reload:function(){var targets=Greenhouse.store.find(Greenhouse.TARGETS_QUERY);
this.set("content",targets)},applications:function(){var apps=[];this.forEach(function(target){if(target.get("sortKind")==="app"){apps.pushObject(target)
}},this);return apps}.property("[]").cacheable()});Greenhouse.viewConfigsController=SC.ArrayController.create({reload:function(){var configQuery=Greenhouse.CONFIG_QUERY,target=Greenhouse.targetController.get("content");
configQuery.set("app",target.get("name"));var files=Greenhouse.store.find(configQuery);
this.set("content",files)},_content_status_changed:function(){var c=this.get("content"),that=this;
if(c&&c.get&&c.get("status")&&c.get("status")===SC.Record.READY_CLEAN){Greenhouse.libraryController.set("content",SC.Object.create({treeItemIsExpanded:YES,treeItemChildren:[SC.Object.create({name:"Views",treeItemIsExpanded:YES,treeItemChildren:that.get("views")}),SC.Object.create({name:"Controllers",treeItemIsExpanded:YES,treeItemChildren:that.get("controllers")}),SC.Object.create({name:"Panes",treeItemIsExpanded:YES,treeItemChildren:that.get("panes")})]}))
}}.observes("*content.status"),refreshContent:function(){this._content_status_changed()
},views:function(){return this._collect_all_the_elements("views")}.property("[]").cacheable(),panes:function(){return this._collect_all_the_elements("panes")
}.property("[]").cacheable(),controllers:function(){return this._collect_all_the_elements("controllers")
}.property("[]").cacheable(),_collect_all_the_elements:function(key){var c=this.get("content"),ret=[],subItem;
if(c&&c.get("length")>0){c.forEach(function(vc){subItem=vc.get(key);if(subItem){subItem.forEach(function(item){ret.pushObject(item)
})}})}return ret},editable:function(){var ret=[],c=this.get("content");if(c){c.forEach(function(item){if(item.get("canEdit")===YES){ret.pushObject(item)
}})}return ret}.property("content").cacheable()});sc_require("core");Greenhouse.File=SC.Record.extend({type:"File",nestedRecordNamespace:Greenhouse,name:SC.Record.attr(String),dir:SC.Record.attr(String),body:SC.Record.attr(String),primaryKey:"id",isFile:YES,path:function(){return this.get("dir")+this.get("name")
}.property("name","dir").cacheable(),pageRegex:function(){var b=this.get("body"),re=/(\w+)\.(\w+)\s*=\s*SC\.Page\.(design|create)/;
return b?b.match(re):b}.property("body").cacheable(),isPage:function(){return this.get("pageRegex")!==null
}.property("pageRegex").cacheable(),pageName:function(){var r=this.get("pageRegex")||[];
return"%@.%@".fmt(r[1],r[2])}.property("pageRegex").cacheable()});Greenhouse.FILES_QUERY=SC.Query.remote(Greenhouse.File);
Greenhouse.File.mixin({});sc_require("core");sc_require("models/file");Greenhouse.mixin({rootFolder:null,loadFileList:function(){if(!this._listRequest){this._listRequest=SC.Request.create({type:"GET",isJSON:YES,address:"/sproutcore/fs?action=list"})
}this._listRequest.notify(this,this._listCompleted,{}).send()},_listCompleted:function(request,params){var root=Greenhouse.File.create({treeItemIsExpanded:YES});
var response=this._parse_response(request.response(),root);root.set("contents",response);
this.set("rootFolder",root);Greenhouse.filesController.set("content",root);Greenhouse.makeFirstResponder(Greenhouse.READY)
},_parse_response:function(content,parent){for(var i=0;i<content.length;i+=1){content[i]=Greenhouse.File.create(content[i]);
if(content[i].contents){content[i].contents=this._parse_response(content[i].contents,content[i])
}content[i].set("parent",parent)}return content},getFile:function(file){if(!this._getRequest){this._getRequest=SC.Request.create({type:"GET"})
}this._getRequest.set("address","/sproutcore/fs/%@".fmt(file.get("path")));this._getRequest.notify(this,this._getCompleted,{file:file}).send()
},_getCompleted:function(request,params){var file=params.file;file.requestComplete(request.response())
},commitFile:function(file){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=overwrite".fmt(file.get("path")));
this._postRequest.notify(this,this._commitCompleted,{file:file}).send(file.get("body"))
},_commitCompleted:function(request,params){var file=params.file;file.requestComplete()
},createFolder:function(file){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=mkdir".fmt(file.get("path")));
this._postRequest.notify(this,this._createFolderCompleted,{file:file}).send()},_createFolderCompleted:function(request,params){var file=params.file;
file.requestComplete()},createFile:function(file){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=touch".fmt(file.get("path")));
this._postRequest.notify(this,this._createFileCompleted,{file:file}).send()},_createFileCompleted:function(request,params){var file=params.file;
file.requestComplete()},destroyFile:function(file){if(!this._postRequest){this._postRequest=SC.Request.create({type:"POST"})
}this._postRequest.set("address","/sproutcore/fs/%@?action=remove".fmt(file.get("path")));
this._postRequest.notify(this,this._destroyFileCompleted,{file:file}).send()},_destroyFileCompleted:function(request,params){var file=params.file;
file.requestComplete();file.destroy()}});Greenhouse.DataSource=SC.DataSource.extend({fetch:function(store,query){var ret=NO,rt=query.get("recordType");
if(rt===Greenhouse.File||rt===Greenhouse.Dir){ret=this.listFiles(store,query)}else{if(rt===Greenhouse.Target){ret=this.fetchTargets(store,query)
}else{if(rt===Greenhouse.ViewConfig){ret=this.fetchViewConfigs(store,query)}}}return ret
},listFiles:function(store,query){SC.Request.create({type:"GET",isJSON:YES,address:"/sproutcore/fs/apps%@/?action=list".fmt(query.get("urlPath"))}).notify(this,this.listFilesDidComplete,{query:query,store:store}).send()
},listFilesDidComplete:function(request,options){var response=request.get("response"),query=options.query,store=options.store,storeKeys,recordTypes;
if(!SC.$ok(response)){console.error("Couldn't request files")}else{recordTypes=response.map(function(item){return item.type==="File"?Greenhouse.File:Greenhouse.Dir
});storeKeys=store.loadRecords(recordTypes,response);store.loadQueryResults(query,storeKeys);
Greenhouse.sendAction("fileListCallDidComplete")}},fetchTargets:function(store,query){if(!query.get("isRemote")){return NO
}SC.Request.getUrl("/sc/targets.json").set("isJSON",YES).notify(this,"fetchTargetsDidComplete",{query:query,store:store}).send();
return YES},fetchTargetsDidComplete:function(request,opts){var response=request.get("response"),query=opts.query,store=opts.store,storeKeys;
if(!SC.$ok(response)){console.error("TODO: Add handler when fetching targets fails")
}else{storeKeys=store.loadRecords(Greenhouse.Target,response);store.loadQueryResults(query,storeKeys);
Greenhouse.sendAction("fetchTargetsDidComplete")}},fetchViewConfigs:function(store,query){if(!query.get("isRemote")){return NO
}SC.Request.getUrl("/sc/greenhouseconf.json?app=%@".fmt(query.get("app"))).set("isJSON",YES).notify(this,"fetchViewConfigsDidComplete",{query:query,store:store}).send();
return YES},fetchViewConfigsDidComplete:function(request,opts){var response=request.get("response"),query=opts.query,store=opts.store,storeKeys;
if(!SC.$ok(response)){console.error("TODO: Add handler when fetching view configs fails")
}else{storeKeys=store.loadRecords(Greenhouse.ViewConfig,response);store.loadQueryResults(query,storeKeys)
}},updateRecord:function(store,storeKey,params){var file=store.materializeRecord(storeKey);
var request=SC.Request.create({type:"POST",address:"/sproutcore/fs/%@?action=overwrite".fmt(file.get("path")),body:file.get("body")}).notify(this,this.updateRecordDidComplete,{file:file,storeKey:storeKey,store:store}).send();
return YES},updateRecordDidComplete:function(response,params){var file=params.file,results=response.get("body"),store=params.store;
if(SC.ok(response)){status=store.readStatus(params.storeKey);store.writeStatus(params.storeKey,SC.Record.BUSY_COMMITTING);
params.store.dataSourceDidComplete(params.storeKey)}else{console.error("Couldn't update file!")
}},retrieveRecord:function(store,storeKey,params){var file=store.materializeRecord(storeKey),request;
if(file.kindOf(Greenhouse.File)){request=SC.Request.create({type:"GET",address:"/sproutcore/fs/%@".fmt(file.get("path"))}).notify(this,this.retrieveRecordDidComplete,{file:file,storeKey:storeKey,store:store}).send();
return YES}return NO},retrieveRecordDidComplete:function(response,params){var file=params.file,store=params.store,attributes,status;
if(SC.ok(response)){attributes=file.get("attributes");attributes.body=response.get("body");
status=store.readStatus(params.storeKey);store.writeStatus(params.storeKey,SC.Record.BUSY_REFRESH|(status&3));
store.dataSourceDidComplete(params.storeKey,attributes)}else{console.error("Couldn't request file")
}},createRecord:function(store,storeKey,params){var file=store.materializeRecord(storeKey);
var request=SC.Request.create({type:"POST",address:"/sproutcore/fs/%@?action=touch".fmt(file.get("path")),body:file.get("body")}).notify(this,this.createRecordDidComplete,{file:file,storeKey:storeKey,store:store}).send();
return YES},createRecordDidComplete:function(response,params){var file=params.file,results=response.get("body"),store=params.store;
if(SC.ok(response)){status=store.readStatus(params.storeKey);store.writeStatus(params.storeKey,SC.Record.BUSY_COMMITTING);
params.store.dataSourceDidComplete(params.storeKey)}else{console.error("Couldn't create file!")
}},destroyRecord:function(store,storeKey,params){var request=SC.Request.create({type:"POST"}),file=store.materializeRecord(storeKey);
request.set("address","/sproutcore/fs/%@?action=remove".fmt(file.get("path")));request.notify(this,this.destroyRecordDidComplete,{file:file,storeKey:storeKey,store:store}).send();
return YES},destroyRecordDidComplete:function(response,params){var status,store=params.store;
status=store.readStatus(params.storeKey);store.writeStatus(params.storeKey,SC.Record.BUSY_DESTROYING);
params.store.dataSourceDidDestroy(params.storeKey)}});Greenhouse.dialogPage=SC.Page.design({modal:SC.PanelPane.design({defaultResponder:"Greenhouse"}),pageFile:SC.View.design({layout:{centerX:0,centerY:0,width:350,height:300},childViews:"title cancel create fileNameLabel fileName filePathLabel filePath pageNameLabel pageName".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_New Page File".loc(),fontWeight:SC.BOLD_WEIGHT}),fileNameLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_File Name:".loc()}),fileName:SC.TextFieldView.design({layout:{top:50,left:15,right:15,height:22},hint:"_main_page.js".loc(),valueBinding:"Greenhouse.newFileName"}),filePathLabel:SC.LabelView.design({layout:{top:95,left:15,right:5,height:22},value:"_File Path:".loc()}),filePath:SC.TextFieldView.design({layout:{top:115,left:15,right:15,height:22},valueBinding:"Greenhouse.newFilePath"}),pageNameLabel:SC.LabelView.design({layout:{top:160,left:15,right:5,height:22},value:"_Page Name:".loc()}),pageName:SC.TextFieldView.design({layout:{top:180,left:15,right:15,height:22},valueBinding:"Greenhouse.newPageName",hint:"_MyApp.mainPage".loc()}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),create:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"create",theme:"capsule",title:"_Create".loc()})}),propertyPicker:SC.PickerPane.design({layout:{width:240,height:290},defaultResponder:"Greenhouse",modalPaneDidClick:function(evt){var f=this.get("frame");
if(!this.clickInside(f,evt)){Greenhouse.sendAction("cancel")}return YES}}),propertyEditor:SC.View.design({childViews:"title keyLabel keyTF valueLabel valueTF updateButton cancelButton".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Edit Property:".loc(),fontWeight:SC.BOLD_WEIGHT}),keyLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_Key:".loc()}),keyTF:SC.TextFieldView.design({layout:{top:50,left:15,right:15,height:22},valueBinding:"Greenhouse.propertyEditorController.key"}),valueLabel:SC.LabelView.design({layout:{top:80,left:15,right:5,height:22},value:"_Value:".loc()}),valueTF:SC.TextFieldView.design({layout:{top:100,left:15,right:15,height:100},valueBinding:"Greenhouse.propertyEditorController.value",isTextArea:YES}),cancelButton:SC.ButtonView.design({layout:{bottom:5,right:105,width:84,height:24},isDefault:NO,action:"cancel",theme:"capsule",keyEquivalent:"escape",title:"_Cancel".loc()}),updateButton:SC.ButtonView.design({layout:{bottom:5,right:15,width:84,height:24},isDefault:YES,action:"update",theme:"capsule",keyEquivalent:"return",title:"_Update".loc()})}),customViewModal:SC.View.design({layout:{centerX:0,centerY:0,width:350,height:380},childViews:"title cancel add classNameLabel className defaultPropertiesLabel defaultProperties targetLabel targetSelect designTypeLabel designType".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Add a Custom Designer to the Library".loc(),fontWeight:SC.BOLD_WEIGHT}),targetLabel:SC.LabelView.design({layout:{top:25,left:15,right:5,height:22},value:"_Target:".loc()}),targetSelect:SC.SelectButtonView.design({layout:{top:48,left:15,right:15,height:22},objectsBinding:"Greenhouse.viewConfigsController.editable",valueBinding:"Greenhouse.newDesignViewConfig",nameKey:"name"}),designTypeLabel:SC.LabelView.design({layout:{top:80,left:15,right:5,height:22},value:"_Design Type:".loc()}),designType:SC.SelectButtonView.design({layout:{top:103,left:15,right:15,height:22},objects:[{name:"Controller",value:"controllers"},{name:"View",value:"views"},{name:"Pane",value:"panes"}],valueBinding:"Greenhouse.newDesignType",nameKey:"name",valueKey:"value"}),classNameLabel:SC.LabelView.design({layout:{top:130,left:15,right:5,height:22},value:"_Class Name:".loc()}),className:SC.TextFieldView.design({layout:{top:153,left:15,right:15,height:22},hint:"_MyApp.AwesomeView".loc(),valueBinding:"Greenhouse.newDesignClass"}),defaultPropertiesLabel:SC.LabelView.design({layout:{top:176,left:15,right:5,height:22},value:"_Default Properties:".loc()}),defaultProperties:SC.TextFieldView.design({layout:{top:199,left:15,right:15,height:135},isTextArea:YES,valueBinding:"Greenhouse.newDesignDefaults"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"add",theme:"capsule",title:"_Add".loc()})}),newItemForPage:SC.View.design({layout:{centerX:0,centerY:0,width:200,height:120},childViews:"title name cancel add ".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Item Name".loc(),fontWeight:SC.BOLD_WEIGHT}),name:SC.TextFieldView.design({layout:{top:45,left:15,right:15,height:22},hint:"_somethingCool".loc(),valueBinding:"Greenhouse.newPageItemName"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"add",theme:"capsule",title:"_Add".loc()})}),createBindingView:SC.View.design({layout:{centerX:0,centerY:0,width:200,height:180},childViews:"title from fromText to toText cancel add ".w(),title:SC.LabelView.design({layout:{top:2,left:15,right:5,height:22},value:"_Specifiy Keys".loc(),fontWeight:SC.BOLD_WEIGHT}),fromText:SC.LabelView.design({layout:{left:15,top:30,right:5,height:22},value:"_From".loc()}),from:SC.TextFieldView.design({layout:{top:48,left:15,right:15,height:22},valueBinding:"Greenhouse.newBindingFromKey"}),toText:SC.LabelView.design({layout:{left:15,top:78,right:5,height:22},value:"_To".loc()}),to:SC.TextFieldView.design({layout:{top:96,left:15,right:15,height:22},valueBinding:"Greenhouse.newBindingToKey"}),cancel:SC.ButtonView.design({layout:{bottom:12,right:103,width:84,height:24},isCancel:YES,action:"cancel",theme:"capsule",title:"_Cancel".loc()}),add:SC.ButtonView.design({layout:{bottom:12,right:12,width:84,height:24},isDefault:YES,action:"create",theme:"capsule",title:"_Add".loc()})})});
Greenhouse.AnchorView=SC.View.extend({anchorLocation:null,isEnabled:YES,isActive:NO,proposedAnchorLocation:null,displayProperties:"anchorLocation isEnabled isActive proposedAnchorLocation".w(),render:function(context,firstTime){if(firstTime){var f=this.get("frame");
context.begin("canvas").attr("width",f.width).attr("height",f.height).end()}},didCreateLayer:function(){this.didUpdateLayer()
},didUpdateLayer:function(){var elem=this.$("canvas"),ctx=elem[0].getContext("2d"),width=this.$().width(),height=this.$().height(),loc=this.get("anchorLocation"),ploc,color,x,y,tmp;
if(Number(elem.attr("width"))!==width){elem.attr("width",width)}if(Number(elem.attr("height"))!==height){elem.attr("height",height)
}width--;height--;if(!this.get("isEnabled")){loc=null}color=loc?"black":"rgb(128,128,128)";
ctx.save();ctx.lineWidth=1;ctx.fillStyle="rgb(255,255,255)";ctx.strokeStyle=color;
ctx.fillRect(0.5,0.5,width,height);ctx.strokeRect(0.5,0.5,width,height);ctx.strokeStyle=color;
ctx.strokeRect(20.5,20.5,width-40,height-40);ctx.beginPath();ctx.moveTo(Math.floor(width/2)+0.5,20.5);
ctx.lineTo(Math.floor(width/2)+0.5,Math.floor(height-20)+0.5);ctx.moveTo(20.5,Math.floor(height/2)+0.5);
ctx.lineTo(Math.floor(width-20)+0.5,Math.floor(height/2)+0.5);ctx.stroke();ctx.restore();
loc=this.get("anchorLocation");ploc=this.get("proposedAnchorLocation");if(ploc&&ploc!==loc){color=this.get("isActive")?"rgb(80,80,80)":"rgb(200,200,200)";
this._drawAnchorAt(ploc,ctx,color,width,height)}this._drawAnchorAt(loc,ctx,"red",width,height)
},mouseMoved:function(evt){this._updateProposedAnchorLocation(evt)},mouseExited:function(evt){this.setIfChanged("proposedAnchorLocation",null)
},mouseDown:function(evt){if(this.get("isEnabled")&&this.get("anchorLocation")){this.get("mouseDown");
this.set("isActive",YES);this._updateProposedAnchorLocation(evt)}return YES},mouseDragged:function(evt){if(this.get("isActive")){this._updateProposedAnchorLocation(evt)
}return YES},mouseUp:function(evt){var loc;if(this.get("isActive")){this._updateProposedAnchorLocation(evt);
loc=this.get("proposedAnchorLocation");if(loc){this.setIfChanged("anchorLocation",loc)
}this.set("isActive",NO)}return YES},_updateProposedAnchorLocation:function(evt){var loc=this.get("anchorLocation"),pnt=this.convertFrameFromView({x:evt.pageX,y:evt.pageY},null),K=SC.ViewDesigner,rad,f,w,h,ret,centerAnchor,centerResize;
if(!this.get("isEnabled")||!loc){ret=null}else{rad=10;f=SC.copy(this.get("frame"));
f.x=f.y=20;f.width-=40;f.height-=40;if(Math.abs(pnt.x-SC.minX(f))<=rad){w=K.ANCHOR_LEFT
}else{if(Math.abs(pnt.x-SC.midX(f))<=rad){w=K.ANCHOR_CENTERX}else{if(Math.abs(pnt.x-SC.maxX(f))<=rad){w=K.ANCHOR_RIGHT
}else{w=0}}}if(Math.abs(pnt.y-SC.minY(f))<=rad){h=K.ANCHOR_TOP}else{if(Math.abs(pnt.y-SC.midY(f))<=rad){h=K.ANCHOR_CENTERY
}else{if(Math.abs(pnt.y-SC.maxY(f))<=rad){h=K.ANCHOR_BOTTOM}else{h=0}}}if(w===0||h===0){rad/=2;
if(Math.abs(pnt.x-SC.minX(f))<=rad){ret=K.ANCHOR_LEFT|K.ANCHOR_HEIGHT}else{if(Math.abs(pnt.x-SC.midX(f))<=rad){ret=K.ANCHOR_CENTERX|K.ANCHOR_HEIGHT
}else{if(Math.abs(pnt.x-SC.maxX(f))<=rad){ret=K.ANCHOR_RIGHT|K.ANCHOR_HEIGHT}else{if(Math.abs(pnt.y-SC.minY(f))<=rad){ret=K.ANCHOR_WIDTH|K.ANCHOR_TOP
}else{if(Math.abs(pnt.y-SC.midY(f))<=rad){ret=K.ANCHOR_WIDTH|K.ANCHOR_CENTERY}else{if(Math.abs(pnt.y-SC.maxY(f))<=rad){ret=K.ANCHOR_WIDTH|K.ANCHOR_BOTTOM
}}}}}}}else{ret=w|h}if(ret===0){ret=null}}centerAnchor=K.ANCHOR_CENTERX|K.ANCHOR_CENTERY;
centerResize=K.ANCHOR_WIDTH|K.ANCHOR_HEIGHT;if(loc===ret){if(ret===centerAnchor){ret=centerResize
}else{if(ret===centerResize){ret=centerAnchor}}}this.setIfChanged("proposedAnchorLocation",ret)
},_drawAnchorAt:function(loc,ctx,color,width,height){var x=this._xForAnchorLocation(loc,20,width-40),y=this._yForAnchorLocation(loc,20,height-40),tmp;
if(x&&y){ctx.save();ctx.strokeStyle=color;if(x<0){tmp=Math.floor(Math.abs(y));ctx.lineWidth=2;
ctx.beginPath();ctx.arc(20.5,tmp,3,0,Math.PI*2,true);ctx.lineTo(Math.floor(width-20)-3.5,tmp);
ctx.arc(Math.floor(width-20),tmp,3,Math.PI,Math.PI*2,true);ctx.arc(Math.floor(width-20),tmp,3,0,Math.PI,true);
ctx.stroke()}if(y<0){tmp=Math.floor(Math.abs(x));ctx.lineWidth=2;ctx.beginPath();
ctx.arc(tmp,20.5,3,0,Math.PI*2,true);ctx.moveTo(tmp,23.5);ctx.lineTo(tmp,Math.floor(height-20)-3.5);
ctx.arc(tmp,Math.floor(height-20),3,Math.PI*1.5,Math.PI*2,true);ctx.arc(tmp,Math.floor(height-20),3,0,Math.PI*1.5,true);
ctx.stroke()}if(x>0&&y>0){ctx.beginPath();ctx.lineWidth=2;ctx.arc(x,y,10,0,Math.PI*2,true);
ctx.stroke()}ctx.restore()}},_xForAnchorLocation:function(loc,left,w){var K=SC.ViewDesigner,ret;
if(loc&K.ANCHOR_LEFT){ret=left}else{if(loc&K.ANCHOR_RIGHT){ret=left+w}else{if(loc&K.ANCHOR_CENTERX){ret=left+Math.floor(w/2)
}else{if(loc&K.ANCHOR_WIDTH){ret=0-(left+Math.floor(w/2))}else{ret=0}}}}return ret
},_yForAnchorLocation:function(loc,top,h){var K=SC.ViewDesigner,ret;if(loc&K.ANCHOR_TOP){ret=top
}else{if(loc&K.ANCHOR_BOTTOM){ret=top+h}else{if(loc&K.ANCHOR_CENTERY){ret=top+Math.floor(h/2)
}else{if(loc&K.ANCHOR_HEIGHT){ret=0-(top+Math.floor(h/2))}else{ret=0}}}}return ret
}});Greenhouse.PlistItemView=SC.View.extend(SC.Control,{classNames:["sc-list-item-view"],contentValueKey:"key",_valueStyle:{position:"absolute",right:5,top:"50%",height:18,marginTop:-9,left:"auto"},render:function(context,firstTime){var content=this.get("content"),key,propertyKey,value,displayValue;
if(firstTime){key=this.get("contentValueKey");propertyKey=(key&&content)?(content.get?content.get(key):content[key]):content;
value=content.get("value");context.begin("label").addStyle({paddingLeft:5}).text(propertyKey).end();
if(value!==undefined){if(SC.typeOf(value)===SC.T_STRING){context.begin("span").addStyle(this._valueStyle).text(value).end()
}else{if(SC.typeOf(value)===SC.T_BOOL){this.renderCheckbox(context,content.get("value"))
}else{if(value.isBinding){context.begin("span").addStyle(this._valueStyle).text(value.displayValue()).end()
}else{value=value.toString();context.begin("span").addStyle(this._valueStyle).text(value).end()
}}}}else{console.log(value);context.begin("span").addStyle(this._valueStyle).text("unknown").end()
}}else{if(this._checkboxRenderSource){var source=this._checkboxRenderSource;this._checkboxRenderDelegate.update(source,this.$(".sc-checkbox-view"))
}}},mouseDown:function(evt){if(this._isInsideElementWithClassName("sc-checkbox-view",evt)){this._addCheckboxActiveState();
this._isMouseDownOnCheckbox=YES;this._isMouseInsideCheckbox=YES;return true}return false
},mouseUp:function(evt){var ret=false,content,state,idx,set;if(this._isMouseDownOnCheckbox){if(this._isInsideElementWithClassName("sc-checkbox-view",evt)){content=this.get("content");
if(content&&content.view&&content.view.get){var value=content.view.get(content.get("key"));
value=(value===SC.MIXED_STATE)?YES:!value;content.view.set(content.get("key"),value);
this._checkboxRenderSource.set("isSelected",value);this.displayDidChange()}ret=true
}this._removeCheckboxActiveState()}this._isMouseDownOnCheckbox=this._isMouseInsideCheckbox=false;
return ret},renderCheckbox:function(context,state){var renderer=this.get("theme").checkboxRenderDelegate;
context=context.begin("div").addStyle(this._valueStyle).addClass("sc-checkbox-view").addClass("sc-regular-size").addClass(this.get("theme").classNames).addClass(renderer.get("name"));
var source=this._checkboxRenderSource;if(!source){source=this._checkboxRenderSource=SC.Object.create({renderState:{},theme:this.get("theme")})
}source.set("isSelected",state&&(state!==SC.MIXED_STATE)).set("isEnabled",this.get("isEnabled")).set("isActive",this._checkboxIsActive).set("title","");
renderer.render(source,context);context=context.end();this._checkboxRenderDelegate=renderer
},_isInsideElementWithClassName:function(className,evt){var layer=this.get("layer");
if(!layer){return NO}var el=SC.$(evt.target);var ret=NO,classNames;while(!ret&&el.length>0&&(el[0]!==layer)){if(el.hasClass(className)){ret=YES
}el=el.parent()}el=layer=null;return ret},_addCheckboxActiveState:function(){if(this.get("isEnabled")){if(this._checkboxRenderDelegate){var source=this._checkboxRenderSource;
source.set("isActive",YES);this._checkboxRenderDelegate.update(source,this.$(".sc-checkbox-view"))
}else{this.$(".sc-checkbox-view").addClass("active")}}},_removeCheckboxActiveState:function(){if(this._checkboxRenderSource){var source=this._checkboxRenderSource;
source.set("isActive",NO);this._checkboxRenderDelegate.update(source,this.$(".sc-checkbox-view"))
}else{this.$(".sc-checkbox-view").removeClass("active")}}});sc_require("views/anchor");
sc_require("views/plist_item");Greenhouse.inspectorsPage=SC.Page.design({propertiesInspector:SC.View.design({layout:{left:5,right:5,top:0,bottom:0},childViews:"viewClass list addProperty deleteProperty".w(),viewClass:SC.LabelView.design({classNames:["title"],layout:{top:5,left:5,right:5,height:22},textAlign:SC.ALIGN_CENTER,isEditable:YES,valueBinding:"Greenhouse.designController.viewClass"}),list:SC.ScrollView.design({layout:{top:34,left:0,right:0,bottom:30},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:44,isEditable:NO,canEditContent:NO,exampleView:Greenhouse.PlistItemView,action:"editProperty",contentValueKey:"key",contentBinding:"Greenhouse.designController.editableProperties",selectionBinding:"Greenhouse.designController.propertySelection"})}),addProperty:SC.ButtonView.design({classNames:["prop-control","dark"],layout:{bottom:0,right:0,height:24,width:35},titleMinWidth:0,hasIcon:NO,title:"+",action:"addProperty",isEnabledBinding:"Greenhouse.designController.content"}),deleteProperty:SC.ButtonView.design({classNames:["prop-control","dark"],layout:{bottom:0,right:36,height:24,width:35},titleMinWidth:0,hasIcon:NO,title:"-",action:"deleteProperty",isEnabledBinding:"Greenhouse.propertyController.content"})}),layoutInspector:SC.View.design({layout:{top:18,left:10,bottom:10,right:10},childViews:"anchorLabel anchorView dimLabel hDimView vDimView".w(),anchorLabel:SC.LabelView.design({layout:{top:0,left:0,width:60,height:18},value:"_Anchor:".loc()}),anchorView:Greenhouse.AnchorView.design({layout:{top:0,left:60,right:10,height:120},anchorLocationBinding:"Greenhouse.layoutController.anchorLocation"}),dimLabel:SC.LabelView.design({layout:{top:134,left:0,width:80,height:18},value:"_Dimensions:".loc()}),hDimView:SC.ContainerView.design({layout:{top:130,left:82,right:10,height:60},nowShowingBinding:"Greenhouse.layoutController.hDimNowShowing"}),vDimView:SC.ContainerView.design({layout:{top:188,left:82,right:10,height:60},nowShowingBinding:"Greenhouse.layoutController.vDimNowShowing"})}),leftDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"leftLabel leftField widthLabel widthField".w(),leftLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Left:".loc()}),leftField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutLeft"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),rightDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"rightLabel rightField widthLabel widthField".w(),rightLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Right:".loc()}),rightField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutRight"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),centerXDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"centerLabel centerField widthLabel widthField".w(),centerLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Center X:".loc()}),centerField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutCenterX"}),widthLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Width:".loc()}),widthField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutWidth"})}),widthDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"leftLabel leftField rightLabel rightField".w(),leftLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Left:".loc()}),leftField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutLeft"}),rightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Right:".loc()}),rightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutRight"})}),topDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"topLabel topField heightLabel heightField".w(),topLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Top:".loc()}),topField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutTop"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),bottomDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"bottomLabel bottomField heightLabel heightField".w(),bottomLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Bottom:".loc()}),bottomField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutBottom"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),centerYDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"centerYLabel centerYField heightLabel heightField".w(),centerYLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Center Y:".loc()}),centerYField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutCenterY"}),heightLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Height:".loc()}),heightField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutHeight"})}),heightDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"topLabel topField bottomLabel bottomField".w(),topLabel:SC.LabelView.design({layout:{top:6,left:0,width:60,height:18},value:"_Top:".loc()}),topField:SC.TextFieldView.design({layout:{top:4,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutTop"}),bottomLabel:SC.LabelView.design({layout:{top:32,left:0,width:60,height:18},value:"_Bottom:".loc()}),bottomField:SC.TextFieldView.design({layout:{top:30,left:50,right:4,height:21},validator:SC.Validator.Number,valueBinding:"Greenhouse.layoutController.layoutBottom"})}),noDimensions:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{left:0,right:0,height:18,centerY:0},textAlign:SC.ALIGN_CENTER,value:"_No Dimensions".loc()})}),noDimensions2:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{left:0,right:0,height:18,centerY:0},textAlign:SC.ALIGN_CENTER,value:"_No Dimensions".loc()})})});
sc_require("core");Greenhouse.DropDown={isShowingDropDown:NO,_dropDownPane:null,dropDown:SC.MenuPane.design({layout:{width:100,height:0},contentView:SC.View.design({}),items:["_item".loc("1"),"_item".loc("2")]}),dropDownType:SC.PICKER_MENU,initMixin:function(){var dropDown=this.get("dropDown");
if(dropDown&&SC.typeOf(dropDown)===SC.T_CLASS){this._dropDownPane=dropDown.create();
if(this._dropDownPane){this.bind("isShowingDropDown","._dropDownPane.isPaneAttached")
}}if(this.target!==undefined&&this.action!==undefined){this.set("target",this);this.set("action","toggle")
}},hideDropDown:function(){if(this._dropDownPane&&SC.typeOf(this._dropDownPane.remove)===SC.T_FUNCTION){this._dropDownPane.remove();
this.set("isShowingDropDown",NO)}},showDropDown:function(){this.hideDropDown();if(this._dropDownPane&&SC.typeOf(this._dropDownPane.popup)===SC.T_FUNCTION){var dropDownType=this.get("dropDownType");
this._dropDownPane.popup(this,dropDownType);this.set("isShowingDropDown",YES)}},toggle:function(){if(this.get("isShowingDropDown")){this.hideDropDown()
}else{this.showDropDown()}}};Greenhouse.Design=SC.Record.extend({primaryKey:"scClass",name:SC.Record.attr(String),scClass:SC.Record.attr(String),defaults:SC.Record.attr(Object),canEdit:function(){return this.getPath("parentRecord.canEdit")
}.property("parentRecord").cacheable()});sc_require("core");Greenhouse.Dir=SC.Record.extend({type:"Dir",nestedRecordNamespace:Greenhouse,name:SC.Record.attr(String),dir:SC.Record.attr(String),contents:SC.Record.toMany("Greenhouse.File",{nested:YES}),primaryKey:"id",isFile:NO,path:function(){return this.get("dir")+this.get("name")
}.property("name","dir").cacheable(),evalBody:function(){var bodyText=this.get("body"),body,designs=[];
try{body=eval(bodyText||"");body.set("needsDesigner",YES);body.set("isContainerView",YES);
this.writeAttribute("currentDesign",body,YES);this.notifyPropertyChange("currentDesign");
for(var v in body){if(body.hasOwnProperty(v)){if(body[v]&&body[v].kindOf){if(body[v].kindOf(SC.View)){designs.push(SC.Object.create({type:"view",view:body.get(v),name:v}))
}else{if(body[v].kindOf(SC.Page)){designs.push(SC.Object.create({type:"page",view:body.get(v),name:v}))
}else{if(body[v].kindOf(SC.Pane)){designs.push(SC.Object.create({type:"pane",view:body.get(v),name:v}))
}}}}}}this.writeAttribute("designs",designs,YES);this.notifyPropertyChange("designs")
}catch(exception){console.log("Couldn't eval body...")}},includesFile:function(file){if(!this.get("isFile")){var contents=this.get("contents"),ret;
ret=contents.find(function(item){if(item.get("type")===file.get("type")&&item.get("name")===file.get("name")&&item!==file){return YES
}});return ret?YES:NO}else{return NO}}});Greenhouse.Dir.mixin({});Greenhouse.Target=SC.Record.extend({primaryKey:"name",name:SC.Record.attr(String),parent:SC.Record.toOne("Greenhouse.Target"),testsUrl:SC.Record.attr(String,{key:"link_tests"}),appUrl:function(){return(this.get("kind")==="app")?this.get("name")+"?designMode=YES":null
}.property("kind","name").cacheable(),isExpanded:SC.Record.attr(Boolean,{defaultValue:NO}),displayName:function(){var name=(this.get("name")||"(unknown)").split("/");
return name[name.length-1]}.property("name").cacheable(),targetIcon:function(){var ret="sc-icon-document-16";
switch(this.get("kind")){case"framework":ret="sc-icon-folder-16";break;case"app":ret="sc-icon-options-16";
break}return ret}.property("kind").cacheable(),sortKind:function(){if(this.get("name")==="/sproutcore"){return null
}var parent=this.get("parent");if(parent&&(parent.get("name")==="/sproutcore")){return"sproutcore"
}else{return(this.get("kind")||"unknown").toLowerCase()}}.property("kind","parent").cacheable()});
Greenhouse.TARGETS_QUERY=SC.Query.remote(Greenhouse.Target);Greenhouse.ViewConfig=SC.Record.extend({primaryKey:"path",views:SC.Record.toMany("Greenhouse.Design",{nested:YES}),panes:SC.Record.toMany("Greenhouse.Design",{nested:YES}),controllers:SC.Record.toMany("Greenhouse.Design",{nested:YES}),canEdit:SC.Record.attr(Boolean),name:SC.Record.attr(String),path:SC.Record.attr(String),body:function(){var ret={name:this.get("name"),path:this.get("path"),views:[],controllers:[],panes:[]},views=this.get("views"),controllers=this.get("controllers"),panes=this.get("panes");
views.forEach(function(i){ret.views.push(i.get("attributes"))});controllers.forEach(function(i){ret.controllers.push(i.get("attributes"))
});panes.forEach(function(i){ret.panes.push(i.get("attributes"))});return js_beautify(SC.json.encode(ret))
}.property("views","panes","controllers")});Greenhouse.CONFIG_QUERY=SC.Query.remote(Greenhouse.ViewConfig);
Greenhouse.mixin({inspectorStates:SC.State.design({initialSubstate:"inspectorClosed",inspectorClosed:SC.State.design({parallelStatechart:"inspector",openInspector:function(anchor){if(anchor){Greenhouse.setPath("inspectorStates.openInspectorPicker.anchor",anchor)
}this.gotoState("openInspectorPicker")},toggleDockedInspector:function(){this.gotoState("dockedInspector")
},floatInspector:function(){this.gotoState("inspectorPalette")}}),openInspectorPicker:SC.State.design({parallelStatechart:"inspector",enterState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("inspectorPicker"),pickerContentView=ap.get("inspectorPickerContentView");
var anchor=this.get("anchor")||ap.getPath("mainView.toolBar.inspector");pickerContentView.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView");
picker.popup(anchor,SC.PICKER_POINTER);picker.becomeFirstResponder()},exitState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("inspectorPicker"),pickerContentView=ap.get("inspectorPickerContentView");
pickerContentView.setIfChanged("nowShowing",null);picker.remove();this.set("anchor",null)
},cancel:function(){this.gotoState("inspectorClosed")},floatInspector:function(){this.gotoState("inspectorPalette")
},toggleDockedInspector:function(){this.gotoState("dockedInspector")}}),inspectorPalette:SC.State.design({parallelStatechart:"inspector",enterState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("inspectorPicker"),pickerContentView=ap.get("inspectorPickerContentView");
pickerContentView.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView");
picker.append();picker.set("isModal",NO);picker.set("isAnchored",NO);picker.$().toggleClass("sc-picker",NO);
var content=ap.getPath("inspectorContentView.content"),toolbar=ap.getPath("inspectorContentView.toolbar");
content.adjust("top",28);toolbar.set("isVisible",YES)},exitState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("inspectorPicker"),pickerContentView=ap.get("inspectorPickerContentView");
pickerContentView.setIfChanged("nowShowing",null);picker.set("isModal",YES);picker.set("isAnchored",YES);
picker.remove();var content=ap.getPath("inspectorContentView.content"),toolbar=ap.getPath("inspectorContentView.toolbar");
content.adjust("top",0);toolbar.set("isVisible",NO)},closeInspector:function(){this.gotoState("inspectorClosed")
},toggleDockedInspector:function(){this.gotoState("dockedInspector")}}),dockedInspector:SC.State.design({parallelStatechart:"inspector",enterState:function(){var iDock=Greenhouse.appPage.get("inspectorDockView");
iDock.setIfChanged("nowShowing","Greenhouse.appPage.inspectorContentView")},exitState:function(){var iDock=Greenhouse.appPage.get("inspectorDockView");
iDock.setIfChanged("nowShowing",null)},toggleDockedInspector:function(){var states=Greenhouse.get("currentStates")||[];
if(states.indexOf(Greenhouse.getState("dockedLibrary"))){Greenhouse.sendEvent("undock")
}this.gotoState("inspectorClosed")}})})});Greenhouse.mixin({libraryStates:SC.State.design({initialSubstate:"libraryClosed",libraryClosed:SC.State.design({parallelStatechart:"library",openLibrary:function(){this.gotoState("openLibraryPicker")
},toggleDockedLibrary:function(){this.gotoState("dockedLibrary")}}),openLibraryPicker:SC.State.design({parallelStatechart:"library",enterState:function(){var picker=Greenhouse.appPage.get("libraryPicker"),button=Greenhouse.appPage.getPath("mainView.toolBar.library"),pickerContentView=Greenhouse.appPage.get("libraryPickerContentView");
pickerContentView.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView");
picker.popup(button,SC.PICKER_POINTER);picker.becomeFirstResponder()},exitState:function(){var picker=Greenhouse.appPage.get("libraryPicker"),pickerContentView=Greenhouse.appPage.get("libraryPickerContentView");
pickerContentView.setIfChanged("nowShowing",null);picker.remove()},cancel:function(){this.gotoState("libraryClosed")
},floatLibrary:function(){this.gotoState("libraryPalette")},toggleDockedLibrary:function(){this.gotoState("dockedLibrary")
}}),libraryPalette:SC.State.design({parallelStatechart:"library",enterState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("libraryPicker"),pickerContentView=ap.get("libraryPickerContentView");
pickerContentView.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView");
picker.append();picker.set("isModal",NO);picker.set("isAnchored",NO);picker.$().toggleClass("sc-picker",NO);
var content=ap.getPath("libraryContentView.content"),toolbar=ap.getPath("libraryContentView.toolbar");
content.adjust("top",49);toolbar.set("isVisible",YES)},exitState:function(){var ap=Greenhouse.appPage;
var picker=ap.get("libraryPicker"),pickerContentView=ap.get("libraryPickerContentView");
pickerContentView.setIfChanged("nowShowing",null);picker.set("isModal",YES);picker.set("isAnchored",YES);
picker.remove();var content=ap.getPath("libraryContentView.content"),toolbar=ap.getPath("libraryContentView.toolbar");
content.adjust("top",49);toolbar.set("isVisible",NO)},closeLibrary:function(){this.gotoState("libraryClosed")
},toggleDockedLibrary:function(){this.gotoState("dockedLibrary")}}),dockedLibrary:SC.State.design({parallelStatechart:"library",enterState:function(){var libDock=Greenhouse.appPage.get("libraryDockView");
libDock.setIfChanged("nowShowing","Greenhouse.appPage.libraryContentView")},exitState:function(){var libDock=Greenhouse.appPage.get("libraryDockView");
libDock.setIfChanged("nowShowing",null)},toggleDockedLibrary:function(){var states=Greenhouse.get("currentStates")||[];
if(states.indexOf(Greenhouse.getState("dockedInspector"))){Greenhouse.sendEvent("undock")
}this.gotoState("libraryClosed")}})})});Greenhouse.mixin({modalStates:SC.State.design({initialSubstate:"modalReady",modalReady:SC.State.design({parallelStatechart:"modals",newBindingPopup:function(item){Greenhouse.setPath("modalStates.createBindingPopup.newItem",item);
this.gotoState("createBindingPopup")},newCustomView:function(){this.gotoState("addCustomView")
},editProperty:function(){this.gotoState("editProperties")},newPageElement:function(item){Greenhouse.set("newItem",item);
this.gotoState("addToPage")},openProjectPicker:function(){this.gotoState("projectPicker")
}}),projectPicker:SC.State.design({parallelStatechart:"modals",enterState:function(){var picker=Greenhouse.appPage.get("projectPicker"),button=Greenhouse.appPage.getPath("mainView.toolBar.project");
picker.popup(button,SC.PICKER_POINTER);picker.becomeFirstResponder()},exitState:function(){var picker=Greenhouse.appPage.get("projectPicker");
picker.remove()},cancel:function(){this.gotoState("modalReady")},newPageFile:function(){this.gotoState("newPage")
}}),createBindingPopup:SC.State.design({parallelStatechart:"modals",enterState:function(){Greenhouse.set("newBindingFromKey",null);
Greenhouse.set("newBindingToKey",null);var modal=Greenhouse.dialogPage.get("modal");
modal.set("contentView",Greenhouse.dialogPage.get("createBindingView"));modal.set("layout",{centerX:0,centerY:0,width:200,height:180});
modal.append()},exitState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.remove();Greenhouse.set("newBindingFromKey",null);Greenhouse.set("newBindingToKey",null);
this.set("newItem",null)},cancel:function(){this.gotoState("modalReady")},create:function(){var fromKey=Greenhouse.get("newBindingFromKey"),toKey=Greenhouse.get("newBindingToKey"),newItem=this.get("newItem"),view=Greenhouse.designController.get("view"),c=Greenhouse.designController.get("content");
if(view&&c){Greenhouse.designController.propertyWillChange("content");var designAttrs=c.get("designAttrs");
if(designAttrs){designAttrs=designAttrs[0]}newItem.addItem(fromKey,toKey,designAttrs);
Greenhouse.designController.propertyDidChange("content")}this.gotoState("modalReady")
}}),addCustomView:SC.State.design({parallelStatechart:"modals",enterState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.set("contentView",Greenhouse.dialogPage.get("customViewModal"));modal.set("layout",{centerX:0,centerY:0,width:350,height:380});
Greenhouse.set("newDesignClass",null);Greenhouse.set("newDesignDefaults",null);Greenhouse.set("newDesignViewConfig",null);
Greenhouse.set("newDesignType",null);modal.append()},exitState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.remove();Greenhouse.set("newDesignClass",null);Greenhouse.set("newDesignDefaults",null);
Greenhouse.set("newDesignViewConfig",null);Greenhouse.set("newDesignType",null)},cancel:function(){this.gotoState("modalReady")
},add:function(){var viewConfig=Greenhouse.get("newDesignViewConfig");var array=viewConfig.get(Greenhouse.get("newDesignType"));
var newView=array.pushObject({name:Greenhouse.get("newDesignClass"),scClass:Greenhouse.get("newDesignClass"),defaults:eval("("+Greenhouse.get("newDesignDefaults")+")")});
viewConfig.commitRecord();Greenhouse.viewConfigsController.notifyPropertyChange(Greenhouse.get("newDesignType"));
Greenhouse.viewConfigsController.refreshContent();this.gotoState("modalReady")}}),newPage:SC.State.design({parentState:"projectPicker",parallelStatechart:"modals",enterState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.set("contentView",Greenhouse.dialogPage.get("pageFile"));modal.set("layout",{centerX:0,centerY:0,width:350,height:300});
Greenhouse.set("newFileName",null);Greenhouse.set("newFilePath",Greenhouse.fileController.get("path"));
Greenhouse.set("newPageName",null);modal.append()},exitState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.remove();Greenhouse.set("newFileName",null);Greenhouse.set("newFilePath",null);
Greenhouse.set("newPageName",null)},cancel:function(){this.gotoState("projectPicker")
},create:function(){var f=Greenhouse.fileController.get("content"),ret,child,page=Greenhouse.get("newPageName"),fileName=Greenhouse.get("newFileName"),filePath=Greenhouse.get("newFilePath")+"/";
if(!fileName.match(/\.js/)){fileName=fileName+".js"}ret=["// SproutCore ViewBuilder Design Format v1.0","// WARNING: This file is automatically generated.  DO NOT EDIT.  Changes you","// make to this file will be lost.","","%@ = SC.Page.design({});".fmt(page),""].join("\n");
var contents=f.get("contents");contents.pushObject({type:"File",dir:filePath,name:fileName,body:ret});
child=contents.objectAt(contents.get("length")-1);child.commitRecord();this.gotoState("projectPicker")
}}),editProperties:SC.State.design({parallelStatechart:"modals",enterState:function(){var picker=Greenhouse.dialogPage.get("propertyPicker");
var cv=Greenhouse.dialogPage.get("propertyEditor");picker.set("contentView",cv);var list=Greenhouse.inspectorsPage.getPath("propertiesInspector.list.contentView");
var content=Greenhouse.propertyController.get("content");picker.popup(list.itemViewForContentObject(content));
picker.becomeFirstResponder();Greenhouse.propertyEditorController.set("content",SC.copy(content))
},exitState:function(){var picker=Greenhouse.dialogPage.get("propertyPicker");picker.remove();
Greenhouse.propertyEditorController.set("content",null)},cancel:function(){this.gotoState("modalReady")
},update:function(){var val=Greenhouse.propertyEditorController.get("value"),view=Greenhouse.propertyEditorController.get("view"),key=Greenhouse.propertyEditorController.get("key"),origKey=Greenhouse.propertyController.get("key"),content=Greenhouse.designController.get("content"),designAttrs;
if(key!==origKey){view[origKey]=undefined;delete view[origKey];view.designer.designProperties.removeObject(origKey);
view.designer.designProperties.pushObject(key);view.designer.propertyDidChange("editableProperties")
}view[key]=eval(val);view.propertyDidChange(key);if(view.displayDidChange){view.displayDidChange()
}Greenhouse.propertyController.set("key",key);Greenhouse.propertyController.set("value",val);
this.gotoState("modalReady")}}),addToPage:SC.State.design({parallelStatechart:"modals",enterState:function(){Greenhouse.set("newPageItemName","");
var modal=Greenhouse.dialogPage.get("modal");modal.set("contentView",Greenhouse.dialogPage.get("newItemForPage"));
modal.set("layout",{width:200,height:120,centerX:0,centerY:0});modal.append()},exitState:function(){var modal=Greenhouse.dialogPage.get("modal");
modal.remove();Greenhouse.set("newItem",null);Greenhouse.set("newPageItemName","")
},cancel:function(){this.gotoState("modalReady")},add:function(){var newItem=Greenhouse.get("newItem"),name=Greenhouse.get("newPageItemName");
newItem.addItemToPage(name);this.gotoState("modalReady")}})})});Greenhouse.mixin({readyStates:SC.State.design({initialSubstate:"readyWaiting",enterState:function(){console.log("greenhouse has landed");
var c=Greenhouse.getPath("mainPage.mainPane.container");c.set("nowShowing",Greenhouse.getPath("appPage.mainView"))
},exitState:function(){},run:function(){var target=Greenhouse.targetController.get("name");
window.open(target,"","")},selectFile:function(){var c=Greenhouse.fileController.get("content");
if(c){c.refresh();this.gotoState("gettingFile")}},unselectFile:function(){this.gotoState("readyWaiting")
},reloadIframe:function(){Greenhouse.filesController.set("selection",null);Greenhouse.gettingFile._firstTime=YES;
Greenhouse.iframe.location.reload();this.gotoState("iframeLoading")},resizePage:function(sender){var s=sender.getPath("content.size"),def={top:20,left:20,right:20,bottom:83},iframe=Greenhouse.get("iframe"),view;
view=iframe.SC.designPage.getPath("designMainPane.container");if(!s){view.set("classNames",["design"]);
view.set("layout",def)}else{view.set("classNames",[]);view.set("layout",SC.merge({centerX:0,centerY:0},s))
}SC.run(function(){var dropViewFrame,webView=Greenhouse.appPage.get("webView"),pv=webView.get("parentView"),webViewFrame=webView.get("frame");
console.log(webViewFrame);webViewFrame=pv.convertFrameToView(webViewFrame,null);console.log(webViewFrame);
pv=view.get("parentView");dropViewFrame=pv.convertFrameToView(view.get("frame"),null);
if(dropViewFrame){webViewFrame.x+=dropViewFrame.x;webViewFrame.y+=dropViewFrame.y
}console.log(Greenhouse._webViewFrame);Greenhouse._webViewFrame=webViewFrame;console.log(Greenhouse._webViewFrame)
})},readyWaiting:SC.State.design({}),gettingFile:SC.State.design({init:function(){arguments.callee.base.apply(this,arguments);
this._firstTime=YES},enterState:function(){},exitState:function(){},fileSelectedIsAPage:function(){Greenhouse.loadIframeWithPage(this._firstTime);
this._firstTime=NO;this.gotoHistoryState("pageSelected")},fileSelectedIsNotAPage:function(){this.gotoState("fileSelected")
}}),fileSelected:SC.State.design({enterState:function(){},exitState:function(){}}),pageSelected:SC.State.design({parentState:"ready",initialSubstate:"noDock",enterState:function(){},exitState:function(){},save:function(){var designPage,content=Greenhouse.fileController.get("content");
designPage=Greenhouse.iframe.SC.designsController.get("page");designPage.setPath("designController.selection",null);
if(!designPage.get("pageName")){designPage.set("pageName",content.get("pageName"))
}designPage=designPage.emitDesign();content.set("body",js_beautify(designPage));content.commitRecord()
},addProperty:function(){var designer=Greenhouse.designController.get("content");
if(designer){this._propertyCount=this._propertyCount?this._propertyCount+1:1;designer.designProperties.pushObject("newProperty"+this._propertyCount);
designer.propertyDidChange("editableProperties")}},deleteProperty:function(){var prop=Greenhouse.propertyController.get("content"),designer=Greenhouse.designController.get("content"),view;
if(prop&&designer){view=prop.view;view[prop.view]=undefined;delete view[prop.key];
designer.designProperties.removeObject(prop.key);view.propertyDidChange(prop.key);
if(view.displayDidChange){view.displayDidChange()}designer.propertyDidChange("editableProperties")
}},noDock:SC.State.design({parentState:"pageSelected",enterState:function(){var dock=Greenhouse.appPage.get("dockView");
dock.set("layout",{top:0,bottom:0,right:0,width:0});var design=Greenhouse.appPage.get("designAreaView");
design.set("layout",{top:0,bottom:0,right:0,left:0})},exitState:function(){},toggleDockedLibrary:function(){this.gotoState("docked")
},toggleDockedInspector:function(){this.gotoState("docked")}}),docked:SC.State.design({parentState:"pageSelected",enterState:function(){var dock=Greenhouse.appPage.get("dockView");
dock.set("layout",{top:0,bottom:0,right:0,width:230});var design=Greenhouse.appPage.get("designAreaView");
design.set("layout",{top:0,left:0,right:230,bottom:0})},exitState:function(){},undock:function(){this.gotoState("noDock")
}})})})});Greenhouse.Theme=SC.AceTheme.create({name:"greenhouse"});SC.Theme.addTheme(Greenhouse.Theme);
SC.defaultTheme="greenhouse";Greenhouse.Theme.wellRenderDelegate=SC.Object.create({name:"container",render:function(dataSource,context){},update:function(){}});
Greenhouse.ApplicationListItem=SC.ListItemView.extend({render:function(context,firstTime){if(this.get("contentIndex")===0){context.addClass("first")
}arguments.callee.base.apply(this,arguments)}});Greenhouse.EventBlocker=SC.View.extend({isVisible:NO,dragStarted:function(drag,evt){this.set("isVisible",YES)
},dragEnded:function(drag,evt){this.set("isVisible",NO)},isDropTarget:YES,mouseMoved:function(evt){return this.get("isVisible")
},mouseDragged:function(evt){return this.get("isVisible")}});SC.LabelView.Designer=SC.LabelView.Designer.extend({designProperties:"value escapeHTML classNames backgroundColor".w()});
Greenhouse.ListItem=SC.ListItemView.extend({});Greenhouse.SimpleButton={target:null,action:null,hasState:NO,hasHover:NO,inState:NO,_hover:NO,stateClass:"state",hoverClass:"hover",activeClass:"active",_isMouseDown:NO,displayProperties:["inState"],mouseDown:function(evt){if(!this.get("isEnabledInPane")){return YES
}this._isMouseDown=YES;this.displayDidChange();return YES},mouseExited:function(evt){if(this.get("hasHover")){this._hover=NO;
this.displayDidChange()}return YES},mouseEntered:function(evt){if(this.get("hasHover")){this._hover=YES;
this.displayDidChange()}return YES},mouseUp:function(evt){if(!this.get("isEnabledInPane")){return YES
}this._isMouseDown=false;var target=this.get("target")||null;var action=this.get("action");
if(this._hasLegacyActionHandler()){this._triggerLegacyActionHandler(evt)}else{this.getPath("pane.rootResponder").sendAction(action,target,this,this.get("pane"))
}if(this.get("hasState")){this.set("inState",!this.get("inState"))}this.displayDidChange();
return YES},renderMixin:function(context,firstTime){if(this.get("hasHover")){var hoverClass=this.get("hoverClass");
context.setClass(hoverClass,this._hover&&!this._isMouseDown)}if(this.get("hasState")){var stateClass=this.get("stateClass");
context.setClass(stateClass,this.inState)}var activeClass=this.get("activeClass");
context.setClass(activeClass,this._isMouseDown);var toolTip=this.get("toolTip");if(SC.typeOf(toolTip)===SC.T_STRING){if(this.get("localize")){toolTip=toolTip.loc()
}context.attr("title",toolTip);context.attr("alt",toolTip)}},_hasLegacyActionHandler:function(){var action=this.get("action");
if(action&&(SC.typeOf(action)===SC.T_FUNCTION)){return true}if(action&&(SC.typeOf(action)===SC.T_STRING)&&(action.indexOf(".")!==-1)){return true
}return false},_triggerLegacyActionHandler:function(evt){var target=this.get("target");
var action=this.get("action");if(target===undefined&&SC.typeOf(action)===SC.T_FUNCTION){this.action(evt)
}else{if(target!==undefined&&SC.typeOf(action)===SC.T_FUNCTION){action.apply(target,[evt])
}}if(SC.typeOf(action)===SC.T_STRING){eval("this.action = function(e) { return "+action+"(this, e); };");
this.action(evt)}}};Greenhouse.TearOffPicker=SC.PickerPane.extend({dragAction:"",mouseDragged:function(evt){Greenhouse.sendAction(this.get("dragAction"));
this._blockedIframe=YES;Greenhouse.eventBlocker.set("isVisible",YES);return arguments.callee.base.apply(this,arguments)
},mouseUp:function(evt){if(this._blockedIframe){Greenhouse.eventBlocker.set("isVisible",NO);
this._blockedIframe=NO}return YES},mouseDown:function(evt){var f=this.get("frame");
this._mouseOffsetX=f?(f.x-evt.pageX):0;this._mouseOffsetY=f?(f.y-evt.pageY):0;return this.modalPaneDidClick(evt)
},modalPaneDidClick:function(evt){var f=this.get("frame");if(!this.clickInside(f,evt)){Greenhouse.sendAction("cancel")
}return YES},computeAnchorRect:function(anchor){var ret=SC.viewportOffset(anchor);
var cq=SC.$(anchor);var wsize=SC.RootResponder.responder.computeWindowSize();ret.width=cq.outerWidth();
ret.height=(wsize.height-ret.y)<cq.outerHeight()?(wsize.height-ret.y):cq.outerHeight();
ret.y=ret.y-11;return ret}});Greenhouse.WebView=SC.WebView.extend({iframeDidLoad:function(){if(this.get("shouldAutoResize")===YES){var contentWindow;
var iframeElt=this.$("iframe")[0];if(iframeElt&&iframeElt.contentWindow){contentWindow=iframeElt.contentWindow;
this.contentWindow=contentWindow;if(contentWindow&&contentWindow.document&&contentWindow.document.documentElement){var docElement=contentWindow.document.documentElement;
if(!SC.browser.isIE){this.$().width(docElement.scrollWidth);this.$().height(docElement.scrollHeight)
}else{this.$().width(docElement.scrollWidth+12);this.$().height(docElement.scrollHeight+5)
}}}}else{var iframe=this.$("iframe")[0];if(iframe){this.contentWindow=iframe.contentWindow
}}Greenhouse.set("iframe",this.contentWindow);Greenhouse.sendAction("iframeLoaded")
}});sc_require("views/list_item");sc_require("views/web");sc_require("views/tear_off_picker");
sc_require("mixins/drop_down");sc_require("views/simple_button");Greenhouse.appPage=SC.Page.design({mainView:SC.View.design({layout:{top:-1,bottom:0,left:0,right:0},childViews:"mainContainer toolBar".w(),defaultResponder:"Greenhouse",mainContainer:SC.ContainerView.design({layout:{left:0,top:46,right:0,bottom:0},nowShowing:"pageDesigner"}),toolBar:SC.ToolbarView.design({layout:{left:0,right:0,top:0,height:46},anchorLocation:SC.ANCHOR_TOP,classNames:["toolbar"],childViews:"logo project save run title library inspector action ".w(),logo:SC.View.design({layout:{left:20,width:131,height:32,centerY:-1},classNames:["greenhouse-logo-s"]}),project:SC.ButtonView.design({toolTip:"_Project".loc(),classNames:["dark"],layout:{left:171,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"projects",action:"openProjectPicker"}),save:SC.ButtonView.design({toolTip:"_Save".loc(),classNames:["dark"],layout:{left:251,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,icon:"save",action:"save"}),run:SC.ButtonView.design({toolTip:"_Run".loc(),classNames:["dark"],layout:{left:304,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,icon:"run",action:"run"}),title:SC.LabelView.design({layout:{centerX:75,centerY:-2,height:24,width:300},classNames:["title"],textAlign:SC.ALIGN_CENTER,valueBinding:SC.Binding.oneWay("Greenhouse.fileController.name")}),library:SC.ButtonView.design({toolTip:"_Library".loc(),classNames:["dark"],layout:{right:153,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"library",action:"openLibrary"}),inspector:SC.ButtonView.design({toolTip:"_Inspector".loc(),classNames:["dark"],layout:{right:100,width:47,height:24,centerY:-1},titleMinWidth:37,hasIcon:YES,icon:"inspector",action:"openInspector"}),action:SC.ButtonView.design(Greenhouse.DropDown,{classNames:["dark"],layout:{right:20,centerY:-1,width:47,height:24},titleMinWidth:37,hasIcon:YES,toolTip:"_Actions".loc(),icon:"actions",dropDown:SC.MenuPane.design({defaultResponder:"Orion",layout:{width:140,height:0},itemTitleKey:"title",itemTargetKey:"target",itemActionKey:"action",itemSeparatorKey:"isSeparator",itemIsEnabledKey:"isEnabled",items:[{title:"_Run".loc(),action:"run",isEnabled:YES},{title:"_Reload App".loc(),action:"reloadIframe",isEnabled:YES},{title:"_Dock Library".loc(),action:"toggleDockedLibrary",isEnabled:YES},{title:"_Dock Inspector".loc(),action:"toggleDockedInspector",isEnabled:YES},{isSeparator:YES},{title:"_Page Size".loc(),subMenu:[{title:"_iPhone Hrz".loc(),action:"resizePage",isEnabled:YES,size:{width:480,height:320}},{title:"_iPhone Vrt".loc(),action:"resizePage",isEnabled:YES,size:{width:320,height:480}},{title:"_iPad Hrz".loc(),action:"resizePage",isEnabled:YES,size:{width:1024,height:768}},{title:"_iPad Vrt".loc(),action:"resizePage",isEnabled:YES,size:{height:1024,width:768}},{title:"_Full".loc(),action:"resizePage",isEnabled:YES}]},{isSeparator:YES},{title:"_Save".loc(),action:"save",isEnabled:YES}]})})})}),designAreaView:SC.outlet("pageDesigner.designArea"),webView:SC.outlet("pageDesigner.designArea.web"),eventBlocker:SC.outlet("pageDesigner.designArea.eventBlocker"),dockView:SC.outlet("pageDesigner.dock"),libraryDockView:SC.outlet("pageDesigner.dock.libraryArea"),inspectorDockView:SC.outlet("pageDesigner.dock.inspectorArea"),pageDesigner:SC.View.design({layout:{left:0,top:0,right:0,bottom:0},childViews:"designArea dock".w(),designArea:SC.View.design({layout:{top:0,left:0,right:0,bottom:0},classNames:["workspace"],childViews:"web eventBlocker".w(),web:Greenhouse.WebView.design({valueBinding:"Greenhouse.targetController.appUrl"}),eventBlocker:Greenhouse.EventBlocker.design({})}),dock:SC.View.design({layout:{top:0,bottom:0,right:0,width:0},childViews:"libraryArea inspectorArea".w(),classNames:["anchored"],libraryArea:SC.ContainerView.design({classNames:["library-docked"],layout:{left:0,top:0,right:0,bottom:386},nowShowing:null}),inspectorArea:SC.ContainerView.design({classNames:["inspector-docked"],layout:{right:0,bottom:0,left:0,height:385},nowShowing:null})})}),inspectorContentView:SC.View.design({childViews:"toolbar content".w(),toolbar:SC.View.design({layout:{top:0,left:0,right:0,height:28},isVisible:NO,childViews:"title remove".w(),title:SC.LabelView.design({layout:{centerX:0,top:2,height:24,width:50},title:"_Inspector".loc()}),remove:SC.View.design(Greenhouse.SimpleButton,{classNames:["close-button"],layout:{right:1,top:6,width:18,height:17},action:"closeInspector"})}),content:SC.TabView.design({layout:{left:6,right:6,bottom:6,height:368},itemTitleKey:"title",itemValueKey:"value",nowShowing:"Greenhouse.inspectorsPage.layoutInspector",items:[{title:"Layout",value:"Greenhouse.inspectorsPage.layoutInspector"},{title:"All Properties",value:"Greenhouse.inspectorsPage.propertiesInspector"}]})}),inspectorPickerContentView:SC.outlet("inspectorPicker.contentView"),inspectorPicker:Greenhouse.TearOffPicker.design({classNames:["gh-picker","inspector"],layout:{width:230,height:380},defaultResponder:"Greenhouse",dragAction:"floatInspector",contentView:SC.ContainerView.design({nowShowing:"Greenhouse.appPage.inspectorContentView"})}),libraryContentView:SC.View.design({childViews:"controlBar toolbar content".w(),controlBar:SC.View.design({classNames:["control-bar"],layout:{left:10,right:10,top:12,height:24},childViews:"search".w(),search:SC.TextFieldView.design({classNames:["search"],layout:{top:0,centerX:0,width:180,height:24},valueBinding:"Greenhouse.libraryController.search"})}),toolbar:SC.View.design({layout:{top:0,left:0,right:0,height:28},isVisible:NO,childViews:"remove".w(),remove:SC.View.design(Greenhouse.SimpleButton,{classNames:["close-button"],layout:{right:1,top:6,width:18,height:17},action:"closeLibrary"})}),content:SC.View.design({classNames:["content"],layout:{top:49,bottom:11,left:8,right:8},childViews:"library addCustomView removeCustomView".w(),library:SC.ScrollView.design({classNames:["library-list"],layout:{top:0,bottom:32,left:0,right:0},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:36,isEditable:NO,contentValueKey:"name",contentBinding:"Greenhouse.libraryController.arrangedObjects",selectionBinding:"Greenhouse.libraryController.selection",delegate:Greenhouse.libraryController,canReorderContent:YES,dragDidBegin:function(drag,loc){Greenhouse.sendAction("cancel")
}})}),removeCustomView:SC.ButtonView.design({classNames:["dark"],layout:{bottom:1,right:70,height:24,width:70},titleMinWidth:0,hasIcon:NO,isEnabledBinding:"Greenhouse.libraryController*selection.firstObject.canEdit",title:"_Remove".loc(),action:"removeCustomView"}),addCustomView:SC.ButtonView.design({classNames:["dark"],layout:{bottom:1,right:0,height:24,width:50},titleMinWidth:0,hasIcon:NO,title:"_Add".loc(),action:"newCustomView"})})}),libraryPickerContentView:SC.outlet("libraryPicker.contentView"),libraryPicker:Greenhouse.TearOffPicker.design({classNames:["gh-picker"],layout:{width:230,height:400},dragAction:"floatLibrary",defaultResponder:"Greenhouse",contentView:SC.ContainerView.design({nowShowing:"Greenhouse.appPage.libraryContentView"})}),projectPicker:SC.PickerPane.design({classNames:["gh-picker"],layout:{width:200,height:500},defaultResponder:"Greenhouse",computeAnchorRect:function(anchor){var ret=SC.viewportOffset(anchor);
var cq=SC.$(anchor);var wsize=SC.RootResponder.responder.computeWindowSize();ret.width=cq.outerWidth();
ret.height=(wsize.height-ret.y)<cq.outerHeight()?(wsize.height-ret.y):cq.outerHeight();
ret.y=ret.y-11;return ret},modalPaneDidClick:function(evt){var f=this.get("frame");
if(!this.clickInside(f,evt)){Greenhouse.sendAction("cancel")}return YES},contentView:SC.View.design({childViews:"controlBar fileList".w(),controlBar:SC.View.design({classNames:["control-bar"],layout:{left:10,right:10,top:12,height:24},childViews:"addPage".w(),addPage:SC.ButtonView.design({classNames:["dark"],layout:{width:90,height:24,left:0},titleMinWidth:0,hasIcon:NO,title:"_Add Page...".loc(),action:"newPageFile"})}),fileList:SC.ScrollView.design({classNames:["content"],layout:{top:49,bottom:11,left:8,right:8},hasHorizontalScroller:NO,contentView:SC.ListView.design({exampleView:Greenhouse.ListItem,isEditable:NO,canEditContent:YES,actOnSelect:YES,deelegate:Greenhouse.filesController,contentValueKey:"name",contentBinding:"Greenhouse.filesController.arrangedObjects",selectionBinding:"Greenhouse.filesController.selection",action:"selectFile"})})})})});
sc_require("views/application_list_item");Greenhouse.mainPage=SC.Page.design({mainPane:SC.MainPane.design({defaultResponder:"Greenhouse",childViews:"container".w(),container:SC.ContainerView.design({nowShowing:""})}),loading:SC.LabelView.design({layout:{bottom:0,height:30,left:0,right:0},value:"Loading...",textAlign:SC.ALIGN_CENTER,classNames:["footer"]}),appPicker:SC.View.design({childViews:"scLogo picker footer warning".w(),classNames:["app-picker"],scLogo:SC.View.design({layout:{width:140,left:10,top:10,height:32},classNames:["sc-logo"]}),picker:SC.View.design({layout:{width:548,height:400,centerX:-102,centerY:-60},childViews:"ghLogo prompt scrollView button".w(),classNames:["app-picker"],ghLogo:SC.View.design({layout:{width:279,left:168,top:0,height:64},classNames:["greenhouse-logo-l"]}),prompt:SC.View.design({layout:{width:175,left:0,top:62,height:128},classNames:["helper"]}),button:SC.ButtonView.design({layout:{bottom:12,height:28,width:140,right:0},isEnabledBinding:"Greenhouse.targetController.content",title:"Load Application",theme:"capsule",isDefault:YES,action:"loadApplication"}),scrollView:SC.ScrollView.design({layout:{right:0,top:60,width:332,bottom:54},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:41,exampleView:Greenhouse.ApplicationListItem,contentBinding:"Greenhouse.targetsController.applications",selectionBinding:"Greenhouse.targetsController.selection",contentValueKey:"displayName",contentIconKey:"targetIcon",hasContentIcon:YES,action:"loadApplication"})})}),warning:SC.LabelView.design({layout:{bottom:60,centerX:0,width:400,height:58},value:"NOTE: Greenhouse is under active development and not yet ready for general use.  At the moment, Greenhouse works best with Google Chrome."}),footer:SC.LabelView.design({layout:{bottom:0,height:30,left:0,right:0},value:"©2011 Strobe Inc. & Contributors",textAlign:SC.ALIGN_CENTER,classNames:["footer"]})})});
Greenhouse.TestPage=SC.Page.design({mainView:SC.View.design({childViews:[SC.ButtonView.design({layout:{width:100,height:24,top:444,left:685},title:"dork",isDefault:YES})]}),myView:SC.View.design({childViews:[SC.ButtonView.design({layout:{width:100,height:24,top:208,left:49}}),SC.ButtonView.design({layout:{width:100,height:24,top:58,left:83}})]}),someView:SC.View.design({}),myC:SC.ObjectController.design({}),pageName:"Greenhouse.TestPage"});
Greenhouse.main=function main(){Greenhouse.getPath("mainPage.mainPane").append();
Greenhouse.targetsController.reload();Greenhouse.initStatechart()};function main(){Greenhouse.main()
}Greenhouse.mixin({rootState:SC.State.design({substatesAreConcurrent:YES,mainStates:SC.State.plugin("Greenhouse.mainStates"),modalStates:SC.State.plugin("Greenhouse.modalStates"),libraryStates:SC.State.plugin("Greenhouse.libraryStates"),inspectorStates:SC.State.plugin("Greenhouse.inspectorStates")}),mainStates:SC.State.design({initialSubstate:"loading",loading:SC.State.design({enterState:function(){console.log("greenhouse is loading");
var c=Greenhouse.getPath("mainPage.mainPane.container");c.set("nowShowing",Greenhouse.getPath("mainPage.loading"))
},exitState:function(){},fileListCallDidComplete:function(){this.gotoState("iframeLoading")
},fetchTargetsDidComplete:function(){this.gotoState("chooseApp")}}),chooseApp:SC.State.design({enterState:function(){var c=Greenhouse.getPath("mainPage.mainPane.container");
c.set("nowShowing",Greenhouse.getPath("mainPage.appPicker"))},exitState:function(){},loadApplication:function(){Greenhouse.filesController.reload();
Greenhouse.viewConfigsController.reload();this.gotoState("loading")}}),ready:SC.State.plugin("Greenhouse.readyStates"),iframeLoading:SC.State.design({enterState:function(){var c=Greenhouse.getPath("mainPage.mainPane.container");
c.set("nowShowing",Greenhouse.getPath("appPage.mainView"))},exitState:function(){},iframeLoaded:function(){this.gotoState("syncRunLoops")
}}),syncRunLoops:SC.State.design({enterState:function(){this._setupRunLoops();this._grabDropTargets();
this._setupGreenhouse();this._setupEventBlocker();this.gotoState("readyWaiting")},exitState:function(){},_setupRunLoops:function(){var iframe=Greenhouse.get("iframe"),innerBegin,outerBegin,innerEnd,outerEnd,outerSC=SC;
outerBegin=function(){var runLoop=outerSC.RunLoop.currentRunLoop;if(!runLoop){runLoop=outerSC.RunLoop.currentRunLoop=outerSC.RunLoop.runLoopClass.create()
}runLoop.beginRunLoop();return outerSC.RunLoop};outerEnd=function(){var runLoop=outerSC.RunLoop.currentRunLoop;
if(!runLoop){throw"SC.RunLoop.end() called outside of a runloop!"}runLoop.endRunLoop();
return outerSC.RunLoop};innerBegin=function(){var runLoop=iframe.SC.RunLoop.currentRunLoop;
if(!runLoop){runLoop=iframe.SC.RunLoop.currentRunLoop=iframe.SC.RunLoop.runLoopClass.create()
}runLoop.beginRunLoop();return iframe.SC.RunLoop};innerEnd=function(){var runLoop=iframe.SC.RunLoop.currentRunLoop;
if(!runLoop){throw"SC.RunLoop.end() called outside of a runloop!"}runLoop.endRunLoop();
return iframe.SC.RunLoop};outerSC.RunLoop.begin=function(){var outer=outerBegin();
innerBegin();return outer};iframe.SC.RunLoop.begin=function(){var inner=innerBegin();
outerBegin();return inner};iframe.SC.RunLoop.end=function(){outerEnd();return innerEnd()
};outerSC.RunLoop.end=function(){innerEnd();return outerEnd()}},_grabDropTargets:function(){var iframe=Greenhouse.get("iframe"),innerTargets,webViewFrame,dropContainerLayout,webView=Greenhouse.appPage.get("webView");
var pv=webView.get("parentView");webViewFrame=webView.get("frame");webViewFrame=pv.convertFrameToView(webViewFrame,null);
dropContainerLayout=iframe.SC.designPage.getPath("designMainPane.container").layout;
if(dropContainerLayout){webViewFrame.x+=dropContainerLayout.left;webViewFrame.y+=dropContainerLayout.top
}Greenhouse._webViewFrame=webViewFrame;innerTargets=iframe.SC.Drag._dropTargets;for(var dt in innerTargets){if(innerTargets.hasOwnProperty(dt)){SC.Drag.addDropTarget(innerTargets[dt])
}}iframe.SC.Drag.addDropTarget=function(target){iframe.SC.Drag._dropTargets[iframe.SC.guidFor(target)]=target;
SC.Drag._dropTargets[iframe.SC.guidFor(target)]=target};iframe.SC.Drag.removeDropTarget=function(target){delete iframe.SC.Drag._dropTargets[iframe.SC.guidFor(target)];
delete SC.Drag._dropTargets[iframe.SC.guidFor(target)]};SC.Drag.start=function(ops){var ret=this.create(ops);
ret.globalTargetOffset=Greenhouse._webViewFrame;ret.startDrag();return ret};iframe.SC.Drag.start=SC.Drag.start;
SC.Drag.prototype._findDropTarget=function(evt){var loc={x:evt.pageX,y:evt.pageY},globalOffset=this.globalTargetOffset;
var target,frame;var ary=this._dropTargets();for(var idx=0,len=ary.length;idx<len;
idx++){target=ary[idx];if(!target.get("isVisibleInWindow")){continue}frame=target.convertFrameToView(target.get("clippingFrame"),null);
if(globalOffset&&target.inGlobalOffset){frame.x+=globalOffset.x;frame.y+=globalOffset.y
}if(SC.pointInRect(loc,frame)){return target}}return null};iframe.SC.Drag.start=SC.Drag.start
},_setupGreenhouse:function(){var iframe=Greenhouse.get("iframe");iframe.SC._Greenhouse=Greenhouse
},_setupEventBlocker:function(){var eventBlocker=Greenhouse.appPage.get("eventBlocker");
Greenhouse.set("eventBlocker",eventBlocker)}})})});