(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6709ac89"],{"26ea":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=this,o=e.$createElement,a=e._self._c||o;return a("div",[a("a-row",[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"general"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"tool"}}),e._v("常规设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"博客标题："}},[a("a-input",{model:{value:e.options.blog_title,callback:function(t){e.$set(e.options,"blog_title",t)},expression:"options.blog_title"}})],1),a("a-form-item",{attrs:{label:"博客地址："}},[a("a-input",{attrs:{placeholder:"如：https://halo.run"},model:{value:e.options.blog_url,callback:function(t){e.$set(e.options,"blog_url",t)},expression:"options.blog_url"}})],1),a("a-form-item",{attrs:{label:"Logo："}},[a("a-input",{model:{value:e.options.blog_logo,callback:function(t){e.$set(e.options,"blog_logo",t)},expression:"options.blog_logo"}},[a("a",{attrs:{slot:"addonAfter",href:"javascript:void(0);"},on:{click:function(){return t.logoDrawerVisible=!0}},slot:"addonAfter"},[a("a-icon",{attrs:{type:"picture"}})],1)])],1),a("a-form-item",{attrs:{label:"Favicon："}},[a("a-input",{model:{value:e.options.blog_favicon,callback:function(t){e.$set(e.options,"blog_favicon",t)},expression:"options.blog_favicon"}},[a("a",{attrs:{slot:"addonAfter",href:"javascript:void(0);"},on:{click:function(){return t.faviconDrawerVisible=!0}},slot:"addonAfter"},[a("a-icon",{attrs:{type:"picture"}})],1)])],1),a("a-form-item",{attrs:{label:"页脚信息："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"支持 HTML 格式的文本"},model:{value:e.options.blog_footer_info,callback:function(t){e.$set(e.options,"blog_footer_info",t)},expression:"options.blog_footer_info"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"seo"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"global"}}),e._v("SEO 设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"屏蔽搜索引擎："}},[a("a-switch",{model:{value:e.options.seo_spider_disabled,callback:function(t){e.$set(e.options,"seo_spider_disabled",t)},expression:"options.seo_spider_disabled"}})],1),a("a-form-item",{attrs:{label:"关键词： "}},[a("a-input",{attrs:{placeholder:"多个关键词以英文状态下的逗号隔开"},model:{value:e.options.seo_keywords,callback:function(t){e.$set(e.options,"seo_keywords",t)},expression:"options.seo_keywords"}})],1),a("a-form-item",{attrs:{label:"博客描述："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:e.options.seo_description,callback:function(t){e.$set(e.options,"seo_description",t)},expression:"options.seo_description"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"post"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"form"}}),e._v("文章设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"首页文章排序："}},[a("a-select",{model:{value:e.options.post_index_sort,callback:function(t){e.$set(e.options,"post_index_sort",t)},expression:"options.post_index_sort"}},[a("a-select-option",{attrs:{value:"createTime"}},[e._v("创建时间")]),a("a-select-option",{attrs:{value:"editTime"}},[e._v("最后编辑时间")]),a("a-select-option",{attrs:{value:"visits"}},[e._v("点击量")])],1)],1),a("a-form-item",{attrs:{label:"首页显示条数："}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.post_index_page_size,callback:function(t){e.$set(e.options,"post_index_page_size",t)},expression:"options.post_index_page_size"}})],1),a("a-form-item",{attrs:{label:"RSS 内容类型："}},[a("a-select",{model:{value:e.options.rss_content_type,callback:function(t){e.$set(e.options,"rss_content_type",t)},expression:"options.rss_content_type"}},[a("a-select-option",{attrs:{value:"full"}},[e._v("全文")]),a("a-select-option",{attrs:{value:"summary"}},[e._v("摘要")])],1)],1),a("a-form-item",{attrs:{label:"RSS 内容条数："}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.rss_page_size,callback:function(t){e.$set(e.options,"rss_page_size",t)},expression:"options.rss_page_size"}})],1),a("a-form-item",{attrs:{label:"文章摘要字数："}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.post_summary_length,callback:function(t){e.$set(e.options,"post_summary_length",t)},expression:"options.post_summary_length"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"comment"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"message"}}),e._v("评论设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"评论者头像："}},[a("a-select",{model:{value:e.options.comment_gravatar_default,callback:function(t){e.$set(e.options,"comment_gravatar_default",t)},expression:"options.comment_gravatar_default"}},[a("a-select-option",{attrs:{value:"mm"}},[e._v("默认")]),a("a-select-option",{attrs:{value:"identicon"}},[e._v("抽象几何图形")]),a("a-select-option",{attrs:{value:"monsterid"}},[e._v("小怪物")]),a("a-select-option",{attrs:{value:"wavatar"}},[e._v("Wavatar")]),a("a-select-option",{attrs:{value:"retro"}},[e._v("复古")]),a("a-select-option",{attrs:{value:"robohash"}},[e._v("机器人")]),a("a-select-option",{attrs:{value:"blank"}},[e._v("不显示头像")])],1)],1),a("a-form-item",{attrs:{label:"评论审核后才显示："}},[a("a-switch",{model:{value:e.options.comment_new_need_check,callback:function(t){e.$set(e.options,"comment_new_need_check",t)},expression:"options.comment_new_need_check"}})],1),a("a-form-item",{attrs:{label:"新评论通知："}},[a("a-switch",{model:{value:e.options.comment_new_notice,callback:function(t){e.$set(e.options,"comment_new_notice",t)},expression:"options.comment_new_notice"}})],1),a("a-form-item",{attrs:{label:"评论回复通知对方："}},[a("a-switch",{model:{value:e.options.comment_reply_notice,callback:function(t){e.$set(e.options,"comment_reply_notice",t)},expression:"options.comment_reply_notice"}})],1),a("a-form-item",{attrs:{label:"API 评论开关：",help:"* 关闭之后将无法进行评论"}},[a("a-switch",{model:{value:e.options.comment_api_enabled,callback:function(t){e.$set(e.options,"comment_api_enabled",t)},expression:"options.comment_api_enabled"}})],1),a("a-form-item",{attrs:{label:"评论模块 JS："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"该设置仅对内置的评论模块有效"},model:{value:e.options.comment_internal_plugin_js,callback:function(t){e.$set(e.options,"comment_internal_plugin_js",t)},expression:"options.comment_internal_plugin_js"}})],1),a("a-form-item",{attrs:{label:"每页显示条数： "}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.comment_page_size,callback:function(t){e.$set(e.options,"comment_page_size",t)},expression:"options.comment_page_size"}})],1),a("a-form-item",{attrs:{label:"占位提示："}},[a("a-input",{model:{value:e.options.comment_content_placeholder,callback:function(t){e.$set(e.options,"comment_content_placeholder",t)},expression:"options.comment_content_placeholder"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"attachment"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"picture"}}),e._v("附件设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"上传图片时预览："}},[a("a-switch",{model:{value:e.options.attachment_upload_image_preview_enable,callback:function(t){e.$set(e.options,"attachment_upload_image_preview_enable",t)},expression:"options.attachment_upload_image_preview_enable"}})],1),a("a-form-item",{attrs:{label:"最大上传文件数："}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.attachment_upload_max_files,callback:function(t){e.$set(e.options,"attachment_upload_max_files",t)},expression:"options.attachment_upload_max_files"}})],1),a("a-form-item",{attrs:{label:"同时上传文件数："}},[a("a-input",{attrs:{type:"number"},model:{value:e.options.attachment_upload_max_parallel_uploads,callback:function(t){e.$set(e.options,"attachment_upload_max_parallel_uploads",t)},expression:"options.attachment_upload_max_parallel_uploads"}})],1),a("a-form-item",{attrs:{label:"存储位置："}},[a("a-select",{model:{value:e.options.attachment_type,callback:function(t){e.$set(e.options,"attachment_type",t)},expression:"options.attachment_type"}},e._l(Object.keys(e.attachmentType),(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(e._s(e.attachmentType[t].text))])})),1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"SMMS"===e.options.attachment_type,expression:"options.attachment_type === 'SMMS'"}],attrs:{id:"smmsForm"}},[a("a-form-item",{attrs:{label:"Secret Token："}},[a("a-input-password",{attrs:{placeholder:"需要到 sm.ms 官网注册后获取"},model:{value:e.options.smms_api_secret_token,callback:function(t){e.$set(e.options,"smms_api_secret_token",t)},expression:"options.smms_api_secret_token"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"UPOSS"===e.options.attachment_type,expression:"options.attachment_type === 'UPOSS'"}],attrs:{id:"upOssForm"}},[a("a-form-item",{attrs:{label:"绑定域名协议："}},[a("a-select",{model:{value:e.options.oss_upyun_domain_protocol,callback:function(t){e.$set(e.options,"oss_upyun_domain_protocol",t)},expression:"options.oss_upyun_domain_protocol"}},[a("a-select-option",{attrs:{value:"https://"}},[e._v("HTTPS")]),a("a-select-option",{attrs:{value:"http://"}},[e._v("HTTP")])],1)],1),a("a-form-item",{attrs:{label:"绑定域名："}},[a("a-input",{attrs:{placeholder:"无需再加上 http:// 或者 https://"},model:{value:e.options.oss_upyun_domain,callback:function(t){e.$set(e.options,"oss_upyun_domain",t)},expression:"options.oss_upyun_domain"}})],1),a("a-form-item",{attrs:{label:"空间名称："}},[a("a-input",{model:{value:e.options.oss_upyun_bucket,callback:function(t){e.$set(e.options,"oss_upyun_bucket",t)},expression:"options.oss_upyun_bucket"}})],1),a("a-form-item",{attrs:{label:"操作员名称："}},[a("a-input",{model:{value:e.options.oss_upyun_operator,callback:function(t){e.$set(e.options,"oss_upyun_operator",t)},expression:"options.oss_upyun_operator"}})],1),a("a-form-item",{attrs:{label:"操作员密码："}},[a("a-input-password",{model:{value:e.options.oss_upyun_password,callback:function(t){e.$set(e.options,"oss_upyun_password",t)},expression:"options.oss_upyun_password"}})],1),a("a-form-item",{attrs:{label:"文件目录："}},[a("a-input",{model:{value:e.options.oss_upyun_source,callback:function(t){e.$set(e.options,"oss_upyun_source",t)},expression:"options.oss_upyun_source"}})],1),a("a-form-item",{attrs:{label:"图片处理策略："}},[a("a-input",{attrs:{placeholder:"间隔标识符+图片处理版本名称"},model:{value:e.options.oss_upyun_style_rule,callback:function(t){e.$set(e.options,"oss_upyun_style_rule",t)},expression:"options.oss_upyun_style_rule"}})],1),a("a-form-item",{attrs:{label:"缩略图处理策略："}},[a("a-input",{attrs:{placeholder:"间隔标识符+图片处理版本名称，一般为后台展示所用"},model:{value:e.options.oss_upyun_thumbnail_style_rule,callback:function(t){e.$set(e.options,"oss_upyun_thumbnail_style_rule",t)},expression:"options.oss_upyun_thumbnail_style_rule"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"QINIUOSS"===e.options.attachment_type,expression:"options.attachment_type === 'QINIUOSS'"}],attrs:{id:"qiniuOssForm"}},[a("a-form-item",{attrs:{label:"绑定域名协议："}},[a("a-select",{model:{value:e.options.oss_qiniu_domain_protocol,callback:function(t){e.$set(e.options,"oss_qiniu_domain_protocol",t)},expression:"options.oss_qiniu_domain_protocol"}},[a("a-select-option",{attrs:{value:"https://"}},[e._v("HTTPS")]),a("a-select-option",{attrs:{value:"http://"}},[e._v("HTTP")])],1)],1),a("a-form-item",{attrs:{label:"绑定域名："}},[a("a-input",{attrs:{placeholder:"无需再加上 http:// 或者 https://"},model:{value:e.options.oss_qiniu_domain,callback:function(t){e.$set(e.options,"oss_qiniu_domain",t)},expression:"options.oss_qiniu_domain"}})],1),a("a-form-item",{attrs:{label:"区域："}},[a("a-auto-complete",{attrs:{dataSource:e.qiniuOssZones,allowClear:""},model:{value:e.options.oss_qiniu_zone,callback:function(t){e.$set(e.options,"oss_qiniu_zone",t)},expression:"options.oss_qiniu_zone"}})],1),a("a-form-item",{attrs:{label:"Access Key："}},[a("a-input-password",{model:{value:e.options.oss_qiniu_access_key,callback:function(t){e.$set(e.options,"oss_qiniu_access_key",t)},expression:"options.oss_qiniu_access_key"}})],1),a("a-form-item",{attrs:{label:"Secret Key："}},[a("a-input-password",{model:{value:e.options.oss_qiniu_secret_key,callback:function(t){e.$set(e.options,"oss_qiniu_secret_key",t)},expression:"options.oss_qiniu_secret_key"}})],1),a("a-form-item",{attrs:{label:"Bucket："}},[a("a-input",{attrs:{placeholder:"存储空间名称"},model:{value:e.options.oss_qiniu_bucket,callback:function(t){e.$set(e.options,"oss_qiniu_bucket",t)},expression:"options.oss_qiniu_bucket"}})],1),a("a-form-item",{attrs:{label:"图片处理策略："}},[a("a-input",{attrs:{placeholder:"样式分隔符+图片处理样式名称"},model:{value:e.options.oss_qiniu_style_rule,callback:function(t){e.$set(e.options,"oss_qiniu_style_rule",t)},expression:"options.oss_qiniu_style_rule"}})],1),a("a-form-item",{attrs:{label:"缩略图处理策略："}},[a("a-input",{attrs:{placeholder:"样式分隔符+图片处理样式名称，一般为后台展示所用"},model:{value:e.options.oss_qiniu_thumbnail_style_rule,callback:function(t){e.$set(e.options,"oss_qiniu_thumbnail_style_rule",t)},expression:"options.oss_qiniu_thumbnail_style_rule"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"ALIOSS"===e.options.attachment_type,expression:"options.attachment_type === 'ALIOSS'"}],attrs:{id:"aliOssForm"}},[a("a-form-item",{attrs:{label:"绑定域名协议："}},[a("a-select",{model:{value:e.options.oss_ali_domain_protocol,callback:function(t){e.$set(e.options,"oss_ali_domain_protocol",t)},expression:"options.oss_ali_domain_protocol"}},[a("a-select-option",{attrs:{value:"https://"}},[e._v("HTTPS")]),a("a-select-option",{attrs:{value:"http://"}},[e._v("HTTP")])],1)],1),a("a-form-item",{attrs:{label:"绑定域名："}},[a("a-input",{attrs:{placeholder:"如不填写，路径根域名将为 Bucket + EndPoint"},model:{value:e.options.oss_ali_domain,callback:function(t){e.$set(e.options,"oss_ali_domain",t)},expression:"options.oss_ali_domain"}})],1),a("a-form-item",{attrs:{label:"Bucket："}},[a("a-input",{attrs:{placeholder:"存储空间名称"},model:{value:e.options.oss_ali_bucket_name,callback:function(t){e.$set(e.options,"oss_ali_bucket_name",t)},expression:"options.oss_ali_bucket_name"}})],1),a("a-form-item",{attrs:{label:"EndPoint（地域节点）："}},[a("a-input",{model:{value:e.options.oss_ali_endpoint,callback:function(t){e.$set(e.options,"oss_ali_endpoint",t)},expression:"options.oss_ali_endpoint"}})],1),a("a-form-item",{attrs:{label:"Access Key："}},[a("a-input-password",{model:{value:e.options.oss_ali_access_key,callback:function(t){e.$set(e.options,"oss_ali_access_key",t)},expression:"options.oss_ali_access_key"}})],1),a("a-form-item",{attrs:{label:"Access Secret："}},[a("a-input-password",{model:{value:e.options.oss_ali_access_secret,callback:function(t){e.$set(e.options,"oss_ali_access_secret",t)},expression:"options.oss_ali_access_secret"}})],1),a("a-form-item",{attrs:{label:"图片处理策略："}},[a("a-input",{attrs:{placeholder:"请到阿里云控制台的图片处理获取"},model:{value:e.options.oss_ali_style_rule,callback:function(t){e.$set(e.options,"oss_ali_style_rule",t)},expression:"options.oss_ali_style_rule"}})],1),a("a-form-item",{attrs:{label:"缩略图处理策略："}},[a("a-input",{attrs:{placeholder:"请到阿里云控制台的图片处理获取，一般为后台展示所用"},model:{value:e.options.oss_ali_thumbnail_style_rule,callback:function(t){e.$set(e.options,"oss_ali_thumbnail_style_rule",t)},expression:"options.oss_ali_thumbnail_style_rule"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"BAIDUBOS"===e.options.attachment_type,expression:"options.attachment_type === 'BAIDUBOS'"}],attrs:{id:"baiduBosForm"}},[a("a-form-item",{attrs:{label:"绑定域名协议："}},[a("a-select",{model:{value:e.options.bos_baidu_domain_protocol,callback:function(t){e.$set(e.options,"bos_baidu_domain_protocol",t)},expression:"options.bos_baidu_domain_protocol"}},[a("a-select-option",{attrs:{value:"https://"}},[e._v("HTTPS")]),a("a-select-option",{attrs:{value:"http://"}},[e._v("HTTP")])],1)],1),a("a-form-item",{attrs:{label:"绑定域名："}},[a("a-input",{attrs:{placeholder:"如不填写，路径根域名将为 Bucket + EndPoint"},model:{value:e.options.bos_baidu_domain,callback:function(t){e.$set(e.options,"bos_baidu_domain",t)},expression:"options.bos_baidu_domain"}})],1),a("a-form-item",{attrs:{label:"Bucket："}},[a("a-input",{attrs:{placeholder:"存储空间名称"},model:{value:e.options.bos_baidu_bucket_name,callback:function(t){e.$set(e.options,"bos_baidu_bucket_name",t)},expression:"options.bos_baidu_bucket_name"}})],1),a("a-form-item",{attrs:{label:"EndPoint（地域节点）："}},[a("a-input",{model:{value:e.options.bos_baidu_endpoint,callback:function(t){e.$set(e.options,"bos_baidu_endpoint",t)},expression:"options.bos_baidu_endpoint"}})],1),a("a-form-item",{attrs:{label:"Access Key："}},[a("a-input-password",{model:{value:e.options.bos_baidu_access_key,callback:function(t){e.$set(e.options,"bos_baidu_access_key",t)},expression:"options.bos_baidu_access_key"}})],1),a("a-form-item",{attrs:{label:"Secret Key："}},[a("a-input-password",{model:{value:e.options.bos_baidu_secret_key,callback:function(t){e.$set(e.options,"bos_baidu_secret_key",t)},expression:"options.bos_baidu_secret_key"}})],1),a("a-form-item",{attrs:{label:"图片处理策略："}},[a("a-input",{attrs:{placeholder:"请到百度云控制台的图片处理获取"},model:{value:e.options.bos_baidu_style_rule,callback:function(t){e.$set(e.options,"bos_baidu_style_rule",t)},expression:"options.bos_baidu_style_rule"}})],1),a("a-form-item",{attrs:{label:"缩略图处理策略："}},[a("a-input",{attrs:{placeholder:"请到百度云控制台的图片处理获取，一般为后台展示所用"},model:{value:e.options.bos_baidu_thumbnail_style_rule,callback:function(t){e.$set(e.options,"bos_baidu_thumbnail_style_rule",t)},expression:"options.bos_baidu_thumbnail_style_rule"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"TENCENTCOS"===e.options.attachment_type,expression:"options.attachment_type === 'TENCENTCOS'"}],attrs:{id:"tencentCosForm"}},[a("a-form-item",{attrs:{label:"绑定域名协议："}},[a("a-select",{model:{value:e.options.cos_tencent_domain_protocol,callback:function(t){e.$set(e.options,"cos_tencent_domain_protocol",t)},expression:"options.cos_tencent_domain_protocol"}},[a("a-select-option",{attrs:{value:"https://"}},[e._v("HTTPS")]),a("a-select-option",{attrs:{value:"http://"}},[e._v("HTTP")])],1)],1),a("a-form-item",{attrs:{label:"绑定域名："}},[a("a-input",{attrs:{placeholder:"如不填写，路径根域名将为 Bucket + 区域地址"},model:{value:e.options.cos_tencent_domain,callback:function(t){e.$set(e.options,"cos_tencent_domain",t)},expression:"options.cos_tencent_domain"}})],1),a("a-form-item",{attrs:{label:"Bucket："}},[a("a-input",{attrs:{placeholder:"存储桶名称"},model:{value:e.options.cos_tencent_bucket_name,callback:function(t){e.$set(e.options,"cos_tencent_bucket_name",t)},expression:"options.cos_tencent_bucket_name"}})],1),a("a-form-item",{attrs:{label:"区域："}},[a("a-auto-complete",{attrs:{dataSource:e.tencentCosRegions,allowClear:""},model:{value:e.options.cos_tencent_region,callback:function(t){e.$set(e.options,"cos_tencent_region",t)},expression:"options.cos_tencent_region"}})],1),a("a-form-item",{attrs:{label:"Secret Id："}},[a("a-input-password",{model:{value:e.options.cos_tencent_secret_id,callback:function(t){e.$set(e.options,"cos_tencent_secret_id",t)},expression:"options.cos_tencent_secret_id"}})],1),a("a-form-item",{attrs:{label:"Secret Key："}},[a("a-input-password",{model:{value:e.options.cos_tencent_secret_key,callback:function(t){e.$set(e.options,"cos_tencent_secret_key",t)},expression:"options.cos_tencent_secret_key"}})],1),a("a-form-item",{attrs:{label:"图片处理策略："}},[a("a-input",{attrs:{placeholder:"请到腾讯云控制台的图片处理获取"},model:{value:e.options.cos_tencent_style_rule,callback:function(t){e.$set(e.options,"cos_tencent_style_rule",t)},expression:"options.cos_tencent_style_rule"}})],1),a("a-form-item",{attrs:{label:"缩略图处理策略："}},[a("a-input",{attrs:{placeholder:"请到腾讯云控制台的图片处理获取，一般为后台展示所用"},model:{value:e.options.cos_tencent_thumbnail_style_rule,callback:function(t){e.$set(e.options,"cos_tencent_thumbnail_style_rule",t)},expression:"options.cos_tencent_thumbnail_style_rule"}})],1)],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"smtp"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mail"}}),e._v("SMTP 服务\n            ")],1),a("div",{staticClass:"custom-tab-wrapper"},[a("a-tabs",[a("a-tab-pane",{key:"1",attrs:{tab:"发信设置"}},[a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"是否启用："}},[a("a-switch",{model:{value:e.options.email_enabled,callback:function(t){e.$set(e.options,"email_enabled",t)},expression:"options.email_enabled"}})],1),a("a-form-item",{attrs:{label:"SMTP 地址："}},[a("a-input",{model:{value:e.options.email_host,callback:function(t){e.$set(e.options,"email_host",t)},expression:"options.email_host"}})],1),a("a-form-item",{attrs:{label:"发送协议："}},[a("a-input",{model:{value:e.options.email_protocol,callback:function(t){e.$set(e.options,"email_protocol",t)},expression:"options.email_protocol"}})],1),a("a-form-item",{attrs:{label:"SSL 端口："}},[a("a-input",{model:{value:e.options.email_ssl_port,callback:function(t){e.$set(e.options,"email_ssl_port",t)},expression:"options.email_ssl_port"}})],1),a("a-form-item",{attrs:{label:"邮箱账号："}},[a("a-input",{model:{value:e.options.email_username,callback:function(t){e.$set(e.options,"email_username",t)},expression:"options.email_username"}})],1),a("a-form-item",{attrs:{label:"邮箱密码："}},[a("a-input-password",{attrs:{placeholder:"部分邮箱可能是授权码"},model:{value:e.options.email_password,callback:function(t){e.$set(e.options,"email_password",t)},expression:"options.email_password"}})],1),a("a-form-item",{attrs:{label:"发件人："}},[a("a-input",{model:{value:e.options.email_from_name,callback:function(t){e.$set(e.options,"email_from_name",t)},expression:"options.email_from_name"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"发送测试"}},[a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"收件人："}},[a("a-input",{model:{value:e.mailParam.to,callback:function(t){e.$set(e.mailParam,"to",t)},expression:"mailParam.to"}})],1),a("a-form-item",{attrs:{label:"主题："}},[a("a-input",{model:{value:e.mailParam.subject,callback:function(t){e.$set(e.mailParam,"subject",t)},expression:"mailParam.subject"}})],1),a("a-form-item",{attrs:{label:"内容："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:e.mailParam.content,callback:function(t){e.$set(e.mailParam,"content",t)},expression:"mailParam.content"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTestMailClick}},[e._v("发送")])],1)],1)],1)],1)],1)]),a("a-tab-pane",{key:"api"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"thunderbolt"}}),e._v("API 设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"API 服务："}},[a("a-switch",{model:{value:e.options.api_enabled,callback:function(t){e.$set(e.options,"api_enabled",t)},expression:"options.api_enabled"}})],1),a("a-form-item",{attrs:{label:"Access key："}},[a("a-input-password",{model:{value:e.options.api_access_key,callback:function(t){e.$set(e.options,"api_access_key",t)},expression:"options.api_access_key"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1),a("a-tab-pane",{key:"other"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"align-left"}}),e._v("其他设置\n            ")],1),a("a-form",{attrs:{layout:"vertical",wrapperCol:e.wrapperCol}},[a("a-form-item",{attrs:{label:"CDN 加速域名："}},[a("a-input",{attrs:{placeholder:"请确保已经正确配置好了 CDN"},model:{value:e.options.blog_cdn_domain,callback:function(t){e.$set(e.options,"blog_cdn_domain",t)},expression:"options.blog_cdn_domain"}})],1),a("a-form-item",{attrs:{label:"自定义 head："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"将放置于每个页面的<head></head>标签中"},model:{value:e.options.blog_custom_head,callback:function(t){e.$set(e.options,"blog_custom_head",t)},expression:"options.blog_custom_head"}})],1),a("a-form-item",{attrs:{label:"统计代码："}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"第三方网站统计的代码，如：Google Analytics、百度统计、CNZZ 等"},model:{value:e.options.blog_statistics_code,callback:function(t){e.$set(e.options,"blog_statistics_code",t)},expression:"options.blog_statistics_code"}})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveOptions}},[e._v("保存")])],1)],1)],1)],1)],1)])],1),a("AttachmentSelectDrawer",{attrs:{title:"选择 Logo"},on:{listenToSelect:e.handleSelectLogo},model:{value:e.logoDrawerVisible,callback:function(t){e.logoDrawerVisible=t},expression:"logoDrawerVisible"}}),a("AttachmentSelectDrawer",{attrs:{title:"选择 Favicon"},on:{listenToSelect:e.handleSelectFavicon},model:{value:e.faviconDrawerVisible,callback:function(t){e.faviconDrawerVisible=t},expression:"faviconDrawerVisible"}})],1)},s=[],i=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),n=o("3993"),l=o("2f62"),r=o("482b"),c=o("9efd"),p="/api/admin/mails",u={testMail:function(t){return Object(c["a"])({url:"".concat(p,"/test"),method:"post",data:t})}},_=u,m=o("a796");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={components:{AttachmentSelectDrawer:n["a"]},data:function(){return{attachmentType:m["a"].type,wrapperCol:{xl:{span:8},lg:{span:8},sm:{span:12},xs:{span:24}},logoDrawerVisible:!1,faviconDrawerVisible:!1,options:[],mailParam:{},tencentCosRegions:[{text:"北京一区",value:"ap-beijing-1"},{text:"北京",value:"ap-beijing"},{text:"上海（华东）",value:"ap-shanghai"},{text:"广州（华南）",value:"ap-guangzhou"},{text:"成都（西南）",value:"ap-chengdu"},{text:"重庆",value:"ap-chongqing"}],qiniuOssZones:[{text:"自动选择",value:"auto"},{text:"华东",value:"z0"},{text:"华北",value:"z1"},{text:"华南",value:"z2"},{text:"北美",value:"na0"},{text:"东南亚",value:"as0"}]}},mounted:function(){this.loadFormOptions()},destroyed:function(){this.faviconDrawerVisible&&(this.faviconDrawerVisible=!1),this.logoDrawerVisible&&(this.logoDrawerVisible=!1)},beforeRouteLeave:function(t,e,o){this.faviconDrawerVisible&&(this.faviconDrawerVisible=!1),this.logoDrawerVisible&&(this.logoDrawerVisible=!1),o()},methods:b({},Object(l["b"])(["loadUser","loadOptions"]),{loadFormOptions:function(){var t=this;r["a"].listAll().then((function(e){t.options=e.data.data}))},handleSaveOptions:function(){var t=this;if(this.options.blog_title)if(this.options.blog_url)if(!this.options.comment_new_notice&&!this.options.comment_reply_notice||this.options.email_enabled){switch(this.options.attachment_type){case"SMMS":if(!this.options.smms_api_secret_token)return void this.$notification["error"]({message:"提示",description:"Secret Token不能为空！"});break;case"UPOSS":if(!this.options.oss_upyun_domain)return void this.$notification["error"]({message:"提示",description:"域名不能为空！"});if(!this.options.oss_upyun_bucket)return void this.$notification["error"]({message:"提示",description:"空间名称不能为空！"});if(!this.options.oss_upyun_operator)return void this.$notification["error"]({message:"提示",description:"操作员名称不能为空！"});if(!this.options.oss_upyun_password)return void this.$notification["error"]({message:"提示",description:"操作员密码不能为空！"});if(!this.options.oss_upyun_source)return void this.$notification["error"]({message:"提示",description:"文件目录不能为空！"});break;case"QINIUOSS":if(!this.options.oss_qiniu_domain)return void this.$notification["error"]({message:"提示",description:"域名不能为空！"});if(!this.options.oss_qiniu_access_key)return void this.$notification["error"]({message:"提示",description:"Access Key 不能为空！"});if(!this.options.oss_qiniu_secret_key)return void this.$notification["error"]({message:"提示",description:"Secret Key 不能为空！"});if(!this.options.oss_qiniu_bucket)return void this.$notification["error"]({message:"提示",description:"Bucket 不能为空！"});break;case"ALIOSS":if(!this.options.oss_ali_bucket_name)return void this.$notification["error"]({message:"提示",description:"Bucket 不能为空！"});if(!this.options.oss_ali_endpoint)return void this.$notification["error"]({message:"提示",description:"EndPoint（地域节点） 不能为空！"});if(!this.options.oss_ali_access_key)return void this.$notification["error"]({message:"提示",description:"Access Key 不能为空！"});if(!this.options.oss_ali_access_secret)return void this.$notification["error"]({message:"提示",description:"Access Secret 不能为空！"});break;case"BAIDUBOS":if(!this.options.bos_baidu_bucket_name)return void this.$notification["error"]({message:"提示",description:"Bucket 不能为空！"});if(!this.options.bos_baidu_endpoint)return void this.$notification["error"]({message:"提示",description:"EndPoint（地域节点） 不能为空！"});if(!this.options.bos_baidu_access_key)return void this.$notification["error"]({message:"提示",description:"Access Key 不能为空！"});if(!this.options.bos_baidu_secret_key)return void this.$notification["error"]({message:"提示",description:"Secret Key 不能为空！"});break;case"TENCENTCOS":if(!this.options.cos_tencent_bucket_name)return void this.$notification["error"]({message:"提示",description:"Bucket 不能为空！"});if(!this.options.cos_tencent_region)return void this.$notification["error"]({message:"提示",description:"区域不能为空！"});if(!this.options.cos_tencent_secret_id)return void this.$notification["error"]({message:"提示",description:"Secret Id 不能为空！"});if(!this.options.cos_tencent_secret_key)return void this.$notification["error"]({message:"提示",description:"Secret Key 不能为空！"});break}if(this.options.email_enabled){if(!this.options.email_host)return void this.$notification["error"]({message:"提示",description:"SMTP 地址不能为空！"});if(!this.options.email_protocol)return void this.$notification["error"]({message:"提示",description:"发送协议不能为空！"});if(!this.options.email_ssl_port)return void this.$notification["error"]({message:"提示",description:"SSL 端口不能为空！"});if(!this.options.email_username)return void this.$notification["error"]({message:"提示",description:"邮箱账号不能为空！"});if(!this.options.email_password)return void this.$notification["error"]({message:"提示",description:"邮箱密码不能为空！"});if(!this.options.email_from_name)return void this.$notification["error"]({message:"提示",description:"发件人不能为空！"})}!this.options.api_enabled||this.options.api_access_key?r["a"].save(this.options).then((function(e){t.loadFormOptions(),t.loadOptions(),t.loadUser(),t.$message.success("保存成功！")})):this.$notification["error"]({message:"提示",description:"Access key 不能为空！"})}else this.$notification["error"]({message:"提示",description:"新评论通知或回复通知需要打开和配置 SMTP 服务！"});else this.$notification["error"]({message:"提示",description:"博客地址不能为空！"});else this.$notification["error"]({message:"提示",description:"博客标题不能为空！"})},handleSelectLogo:function(t){this.$set(this.options,"blog_logo",encodeURI(t.path)),this.logoDrawerVisible=!1},handleTestMailClick:function(){var t=this;this.mailParam.to?this.mailParam.subject?this.mailParam.content?_.testMail(this.mailParam).then((function(e){t.$message.info(e.data.message)})):this.$notification["error"]({message:"提示",description:"内容不能为空！"}):this.$notification["error"]({message:"提示",description:"主题不能为空！"}):this.$notification["error"]({message:"提示",description:"收件人不能为空！"})},handleSelectFavicon:function(t){this.options.blog_favicon=encodeURI(t.path),this.faviconDrawerVisible=!1}})},h=f,v=o("2877"),y=Object(v["a"])(h,a,s,!1,null,null,null);e["default"]=y.exports},3993:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("a-drawer",{attrs:{title:t.title,width:t.isMobile()?"100%":t.drawerWidth,closable:"",visible:t.visible,destroyOnClose:""},on:{close:t.onClose}},[o("a-row",{attrs:{type:"flex",align:"middle"}},[o("a-input-search",{attrs:{placeholder:"搜索附件",enterButton:""},on:{search:function(e){return t.handleQuery()}},model:{value:t.queryParam.keyword,callback:function(e){t.$set(t.queryParam,"keyword",e)},expression:"queryParam.keyword"}})],1),o("a-divider"),o("a-row",{attrs:{type:"flex",align:"middle"}},[o("a-skeleton",{attrs:{active:"",loading:t.skeletonLoading,paragraph:{rows:18}}},[o("a-col",{attrs:{span:24}},[0==t.attachments.length?o("a-empty"):t._l(t.attachments,(function(e,a){return o("div",{key:a,staticClass:"attach-item",on:{click:function(o){return t.handleSelectAttachment(e)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.handleJudgeMediaType(e),expression:"!handleJudgeMediaType(item)"}]},[t._v("当前格式不支持预览")]),o("img",{directives:[{name:"show",rawName:"v-show",value:t.handleJudgeMediaType(e),expression:"handleJudgeMediaType(item)"}],attrs:{src:e.thumbPath,loading:"lazy"}})])}))],2)],1)],1),o("a-divider"),o("div",{staticClass:"page-wrapper"},[o("a-pagination",{attrs:{current:t.pagination.page,total:t.pagination.total,defaultPageSize:t.pagination.size},on:{change:t.handlePaginationChange}})],1),o("a-divider",{staticClass:"divider-transparent"}),o("div",{staticClass:"bottom-control"},[t.isChooseAvatar?o("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:t.handleSelectGravatar}},[t._v("使用 Gravatar")]):t._e(),o("a-button",{attrs:{type:"primary"},on:{click:t.handleShowUploadModal}},[t._v("上传附件")])],1)],1),o("a-modal",{attrs:{title:"上传附件",footer:null,afterClose:t.onUploadClose,destroyOnClose:""},model:{value:t.uploadVisible,callback:function(e){t.uploadVisible=e},expression:"uploadVisible"}},[o("FilePondUpload",{ref:"upload",attrs:{uploadHandler:t.uploadHandler}})],1)],1)},s=[],i=(o("28a5"),o("55dd"),o("c5f6"),o("ac0d")),n=o("a796"),l={name:"AttachmentSelectDrawer",mixins:[i["a"],i["b"]],model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!1},drawerWidth:{type:Number,required:!1,default:460},title:{type:String,required:!1,default:"选择附件"},isChooseAvatar:{type:Boolean,required:!1,default:!1}},data:function(){return{uploadVisible:!1,skeletonLoading:!0,pagination:{page:1,size:12,sort:""},queryParam:{page:0,size:12,sort:null,keyword:null},attachments:[],uploadHandler:n["a"].upload}},watch:{visible:function(t,e){t&&(this.loadSkeleton(),this.loadAttachments())}},methods:{loadSkeleton:function(){var t=this;this.skeletonLoading=!0,setTimeout((function(){t.skeletonLoading=!1}),500)},handleShowUploadModal:function(){this.uploadVisible=!0},loadAttachments:function(){var t=this;this.queryParam.page=this.pagination.page-1,this.queryParam.size=this.pagination.size,this.queryParam.sort=this.pagination.sort,n["a"].query(this.queryParam).then((function(e){t.attachments=e.data.data.content,t.pagination.total=e.data.data.total}))},handleQuery:function(){this.handlePaginationChange(1,this.pagination.size)},handleSelectAttachment:function(t){this.$emit("listenToSelect",t)},handleSelectGravatar:function(){this.$emit("listenToSelectGravatar")},handlePaginationChange:function(t,e){this.pagination.page=t,this.pagination.size=e,this.loadAttachments()},onUploadClose:function(){this.$refs.upload.handleClearFileList(),this.loadSkeleton(),this.handlePaginationChange(1,this.pagination.size)},handleJudgeMediaType:function(t){var e=t.mediaType;if(e){var o=e.split("/")[0];return"image"===o}return!1},onClose:function(){this.$emit("close",!1)}}},r=l,c=o("2877"),p=Object(c["a"])(r,a,s,!1,null,null,null);e["a"]=p.exports},a796:function(t,e,o){"use strict";var a=o("bc3a"),s=o.n(a),i=o("9efd"),n="/api/admin/attachments",l={query:function(t){return Object(i["a"])({url:n,params:t,method:"get"})},get:function(t){return Object(i["a"])({url:"".concat(n,"/").concat(t),method:"get"})},delete:function(t){return Object(i["a"])({url:"".concat(n,"/").concat(t),method:"delete"})},update:function(t,e){return Object(i["a"])({url:"".concat(n,"/").concat(t),method:"put",data:e})},getMediaTypes:function(){return Object(i["a"])({url:"".concat(n,"/media_types"),method:"get"})}};l.CancelToken=s.a.CancelToken,l.isCancel=s.a.isCancel,l.upload=function(t,e,o){return Object(i["a"])({url:"".concat(n,"/upload"),timeout:864e4,data:t,onUploadProgress:e,cancelToken:o,method:"post"})},l.uploads=function(t,e,o){return Object(i["a"])({url:"".concat(n,"/uploads"),timeout:864e4,data:t,onUploadProgress:e,cancelToken:o,method:"post"})},l.type={LOCAL:{type:"local",text:"本地"},SMMS:{type:"smms",text:"SM.MS"},UPOSS:{type:"uposs",text:"又拍云"},QINIUOSS:{type:"qiniuoss",text:"七牛云"},ALIOSS:{type:"alioss",text:"阿里云"},BAIDUBOS:{type:"baidubos",text:"百度云"},TENCENTCOS:{type:"tencentcos",text:"腾讯云"}},e["a"]=l}}]);