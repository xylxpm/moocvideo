 <ul>
    {{~ it.list:pl:index}}
    <li class="pl-list clearfix">
      <div class="pl-list-avator">
        <a href="/u/{{=pl.uid}}/courses" target="_blank"><img width="40" height="40" src="{{=pl.pic}}" title="{{=pl.nickname}}" /></a>
      </div>
      <div class="pl-list-main">
        <div class="pl-list-nick"> <a href="/u/{{=pl.uid}}/courses" target="_blank">{{=pl.nickname}}</a> </div>
        <div class="pl-list-content">{{=pl.description}}</div>
        <div class="pl-list-btm clearfix">
          <span class="pl-list-time l">???иж??: {{=pl.create_time}}</span>
          {{?pl.is_support>0}}
            <a title="??????ии??" href="javascript:;" class="js-pl-praise list-praise on r" data-id="{{=pl.id}}"><i class="icon-thumb-revert on"></i>
          {{??}}
            <a title="ии??" href="javascript:;" class="js-pl-praise list-praise r" data-id="{{=pl.id}}"><i class="icon-thumb-revert"></i>
          {{?}}
          <span>{{=pl.support_num}}</span></a>
        </div>
      </div>
    </li>
    {{~}}
</ul>