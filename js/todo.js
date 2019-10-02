$(document).ready(function() {
  function generateUUID() {
    /*jshint bitwise:false */
    var i, random;
    var uuid = "";

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += "-";
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }
    return uuid;
  }

  // code to be implemented

  $("#button").click(function() {
    var toAdd = $("input[name=ListItem]").val();
    $("ol").append(
      `<li class="" id=` +
        generateUUID() +
        `><input name="done-todo" type="checkbox" class="done-todo" />` +
        toAdd +
        `</li>`
    );
  });

  $("body").on("click", 'input[type="checkbox"]', function() {
    let value = this.parentElement.id;
    $("#" + value).toggleClass("checked");
  });

  $("#filters li a").click(function(e) {
    if (this.dataset.filter == "all") {
      $("li[class='checked']").show();
      $("li[class='']").show();
    } else if (this.dataset.filter == "active") {
      $("li[class='checked']").hide();
      $("li[class='']").show();
    } else if (this.dataset.filter == "complete") {
      $("li[class='checked']").show();
      $("li[class='']").hide();
    }
  });

  $(document).on("dblclick", "li", function() {
    $(this)
      .attr("contentEditable", "true")
      .focus()
      .keypress(function(event) {
        var keycode = event.keyCode ? event.keyCode : event.which;
        if (keycode == "13") {
          event.target.blur();
          $(this).attr("contentEditable", "false");
        }
      });
  });
});
