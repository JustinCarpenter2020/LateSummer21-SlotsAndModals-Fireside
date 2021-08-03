<template>
  <nav class="menu">
    <div class="menu__bg">
      <img data-toggle="modal"
           data-target="#house"
           src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5%0D%0APSIwcHgiIHdpZHRoPSIzMHB4Ig0KCSBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIg%0D%0AZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0K%0D%0APGcgaWQ9IkNhcGFfMSIgZGlzcGxheT0ibm9uZSI+DQoJPGcgZGlzcGxheT0iaW5saW5lIj4NCgkJ%0D%0APGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTUiIGN5PSIxNSIgcj0iMi45MTciLz4NCgkJPHBh%0D%0AdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTAsMHYzMGgzMFYwSDB6IE0yMS4yNSwxNWMwLDAuMjc1LTAu%0D%0AMDI1LDAuNTQ2LTAuMDU5LDAuODEzbDEuNzU5LDEuMzc5YzAuMTU4LDAuMTMsMC4yMDQsMC4zNTQs%0D%0AMC4xLDAuNTMzDQoJCQlsLTEuNjY2LDIuODg5Yy0wLjEwNCwwLjE3OS0wLjMyMSwwLjI0OS0wLjUw%0D%0AOSwwLjE3OUwxOC44LDE5Ljk1NGMtMC40MjksMC4zMzMtMC44OTksMC42MDgtMS40MDgsMC44Mmwt%0D%0AMC4zMTMsMi4yMDkNCgkJCWMtMC4wMzMsMC4xOTUtMC4yMDQsMC4zNS0wLjQxMywwLjM1aC0zLjMz%0D%0AM2MtMC4yMDgsMC0wLjM3OS0wLjE1NC0wLjQxMy0wLjM1bC0wLjMxMy0yLjIwOWMtMC41MDgtMC4y%0D%0AMTItMC45NzktMC40OTEtMS40MDgtMC44Mg0KCQkJbC0yLjA3NSwwLjgzOGMtMC4xODgsMC4wNzUt%0D%0AMC40MDQsMC0wLjUwOC0wLjE3OUw2Ljk1LDE3LjcyNWMtMC4xMDQtMC4xODQtMC4wNTktMC40MDgs%0D%0AMC4xLTAuNTMzbDEuNzU5LTEuMzc5DQoJCQlDOC43NzUsMTUuNTQ2LDguNzUsMTUuMjc1LDguNzUs%0D%0AMTVjMC0wLjI3NSwwLjAyNS0wLjU0NiwwLjA1OS0wLjgxM0w3LjA1LDEyLjgwOGMtMC4xNTgtMC4x%0D%0AMjktMC4yMDQtMC4zNTQtMC4xLTAuNTMzbDEuNjY3LTIuODg4DQoJCQljMC4xMDQtMC4xNzksMC4z%0D%0AMjEtMC4yNSwwLjUwOC0wLjE3OWwyLjA3NSwwLjgzN2MwLjQyOS0wLjMzMywwLjktMC42MDgsMS40%0D%0AMDgtMC44MjFsMC4zMTMtMi4yMDgNCgkJCWMwLjAzMy0wLjE5NiwwLjIwNC0wLjM1LDAuNDEzLTAu%0D%0AMzVoMy4zMzNjMC4yMDksMCwwLjM4LDAuMTU0LDAuNDE3LDAuMzVsMC4zMTMsMi4yMDhjMC41MDks%0D%0AMC4yMTIsMC45NzksMC40OTIsMS40MDgsMC44MjENCgkJCWwyLjA3NS0wLjgzN2MwLjE4OC0wLjA3%0D%0ANSwwLjQwNCwwLDAuNTA5LDAuMTc5bDEuNjY3LDIuODg4YzAuMTA0LDAuMTg0LDAuMDU5LDAuNDA4%0D%0ALTAuMTAxLDAuNTMzbC0xLjc2MywxLjM3OQ0KCQkJQzIxLjIyNSwxNC40NTQsMjEuMjUsMTQuNzI1%0D%0ALDIxLjI1LDE1eiIvPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJDYXBhXzIiPg0KCTxwYXRoIGZpbGw9%0D%0AIiNGRkZGRkYiIGQ9Ik0wLDB2MzBoMzBWMEgweiBNMjAuODMzLDE1LjQxN3Y2LjY2NmgtNC4xNjZ2%0D%0ALTVoLTMuMzMzdjVIOS4xNjd2LTYuNjY2aC0yLjVMMTUsNy45MTdsOC4zMzMsNy41SDIwLjgzM3oi%0D%0ALz4NCjwvZz4NCjxnIGlkPSJDYXBhXzMiIGRpc3BsYXk9Im5vbmUiPg0KCTxnIGRpc3BsYXk9Imlu%0D%0AbGluZSI+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNSw3Yy00LjQxLDAtOCwzLjU5MS04%0D%0ALDhjMCw0LjQxMSwzLjU5LDgsOCw4YzQuNDEsMCw4LTMuNTg5LDgtOEMyMywxMC41OTEsMTkuNDEs%0D%0ANywxNSw3eiBNMjAsMTZoLTR2NGgtMg0KCQkJdi00aC00di0yaDR2LTRoMnY0aDRWMTZ6Ii8+DQoJ%0D%0ACTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDB2MzBoMzBWMEgweiBNMTUsMjVDOS40NzUsMjUs%0D%0ANSwyMC41MjUsNSwxNUM1LDkuNDc1LDkuNDc1LDUsMTUsNWM1LjUyNSwwLDEwLDQuNDc1LDEwLDEw%0D%0ADQoJCQlDMjUsMjAuNTI1LDIwLjUyNSwyNSwxNSwyNXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4N%0D%0ACg=="
           alt="Icon"
           class="menu__icon"
      >
    </div>

    <div class="menu__bg big">
      <img
        data-toggle="modal"
        data-target="#job"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5%0D%0APSIwcHgiIHdpZHRoPSIzMHB4Ig0KCSBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIg%0D%0AZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0K%0D%0APGcgaWQ9IkNhcGFfMSIgZGlzcGxheT0ibm9uZSI+DQoJPGcgZGlzcGxheT0iaW5saW5lIj4NCgkJ%0D%0APGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMTUiIGN5PSIxNSIgcj0iMi45MTciLz4NCgkJPHBh%0D%0AdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTAsMHYzMGgzMFYwSDB6IE0yMS4yNSwxNWMwLDAuMjc1LTAu%0D%0AMDI1LDAuNTQ2LTAuMDU5LDAuODEzbDEuNzU5LDEuMzc5YzAuMTU4LDAuMTMsMC4yMDQsMC4zNTQs%0D%0AMC4xLDAuNTMzDQoJCQlsLTEuNjY2LDIuODg5Yy0wLjEwNCwwLjE3OS0wLjMyMSwwLjI0OS0wLjUw%0D%0AOSwwLjE3OUwxOC44LDE5Ljk1NGMtMC40MjksMC4zMzMtMC44OTksMC42MDgtMS40MDgsMC44Mmwt%0D%0AMC4zMTMsMi4yMDkNCgkJCWMtMC4wMzMsMC4xOTUtMC4yMDQsMC4zNS0wLjQxMywwLjM1aC0zLjMz%0D%0AM2MtMC4yMDgsMC0wLjM3OS0wLjE1NC0wLjQxMy0wLjM1bC0wLjMxMy0yLjIwOWMtMC41MDgtMC4y%0D%0AMTItMC45NzktMC40OTEtMS40MDgtMC44Mg0KCQkJbC0yLjA3NSwwLjgzOGMtMC4xODgsMC4wNzUt%0D%0AMC40MDQsMC0wLjUwOC0wLjE3OUw2Ljk1LDE3LjcyNWMtMC4xMDQtMC4xODQtMC4wNTktMC40MDgs%0D%0AMC4xLTAuNTMzbDEuNzU5LTEuMzc5DQoJCQlDOC43NzUsMTUuNTQ2LDguNzUsMTUuMjc1LDguNzUs%0D%0AMTVjMC0wLjI3NSwwLjAyNS0wLjU0NiwwLjA1OS0wLjgxM0w3LjA1LDEyLjgwOGMtMC4xNTgtMC4x%0D%0AMjktMC4yMDQtMC4zNTQtMC4xLTAuNTMzbDEuNjY3LTIuODg4DQoJCQljMC4xMDQtMC4xNzksMC4z%0D%0AMjEtMC4yNSwwLjUwOC0wLjE3OWwyLjA3NSwwLjgzN2MwLjQyOS0wLjMzMywwLjktMC42MDgsMS40%0D%0AMDgtMC44MjFsMC4zMTMtMi4yMDgNCgkJCWMwLjAzMy0wLjE5NiwwLjIwNC0wLjM1LDAuNDEzLTAu%0D%0AMzVoMy4zMzNjMC4yMDksMCwwLjM4LDAuMTU0LDAuNDE3LDAuMzVsMC4zMTMsMi4yMDhjMC41MDks%0D%0AMC4yMTIsMC45NzksMC40OTIsMS40MDgsMC44MjENCgkJCWwyLjA3NS0wLjgzN2MwLjE4OC0wLjA3%0D%0ANSwwLjQwNCwwLDAuNTA5LDAuMTc5bDEuNjY3LDIuODg4YzAuMTA0LDAuMTg0LDAuMDU5LDAuNDA4%0D%0ALTAuMTAxLDAuNTMzbC0xLjc2MywxLjM3OQ0KCQkJQzIxLjIyNSwxNC40NTQsMjEuMjUsMTQuNzI1%0D%0ALDIxLjI1LDE1eiIvPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJDYXBhXzIiIGRpc3BsYXk9Im5vbmUi%0D%0APg0KCTxwYXRoIGRpc3BsYXk9ImlubGluZSIgZmlsbD0iI0ZGRkZGRiIgZD0iTTAsMHYzMGgzMFYw%0D%0ASDB6IE0yMC44MzMsMTUuNDE3djYuNjY2aC00LjE2NnYtNWgtMy4zMzN2NUg5LjE2N3YtNi42NjZo%0D%0ALTIuNUwxNSw3LjkxNw0KCQlsOC4zMzMsNy41SDIwLjgzM3oiLz4NCjwvZz4NCjxnIGlkPSJDYXBh%0D%0AXzMiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUuMDgzLDcuMDAxQzEwLjY3%0D%0AMiw2Ljk1Niw3LjA0NSwxMC41MSw3LDE0LjkxOXMzLjUxLDguMDM2LDcuOTE4LDguMDgxDQoJCQlj%0D%0ANC40MSwwLjA0NSw4LjAzNS0zLjUwOSw4LjA4LTcuOTE5QzIzLjA0MywxMC42NzMsMTkuNDkyLDcu%0D%0AMDQ2LDE1LjA4Myw3LjAwMXogTTE4LjUsMTUuN2gtMi44djIuOEgxNC4zdi0yLjhoLTIuOFYxNC4z%0D%0AaDIuOHYtMi44DQoJCQlIMTUuN3YyLjhoMi44VjE1Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZG%0D%0ARkYiIGQ9Ik0wLDB2MzBoMzBWMEgweiBNMTUsMjVDOS40NzUsMjUsNSwyMC41MjUsNSwxNUM1LDku%0D%0ANDc2LDkuNDc1LDUsMTUsNWM1LjUyNSwwLDEwLDQuNDc2LDEwLDEwDQoJCQlDMjUsMjAuNTI1LDIw%0D%0ALjUyNSwyNSwxNSwyNXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
        alt="Icon"
        class="menu__icon big"
      >
    </div>

    <div class="menu__bg">
      <img
        data-toggle="modal"
        data-target="#car"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAv%0D%0Ac3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5%0D%0APSIwcHgiIHdpZHRoPSIzMHB4Ig0KCSBoZWlnaHQ9IjMwcHgiIHZpZXdCb3g9IjAgMCAzMCAzMCIg%0D%0AZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0K%0D%0APGcgaWQ9IkNhcGFfMSI+DQoJPGc+DQoJCTxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjE1IiBj%0D%0AeT0iMTUiIHI9IjIuOTE3Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDB2MzBoMzBW%0D%0AMEgweiBNMjEuMjUsMTVjMCwwLjI3NS0wLjAyNSwwLjU0Ni0wLjA1OSwwLjgxM2wxLjc1OSwxLjM3%0D%0AOWMwLjE1OCwwLjEzLDAuMjA0LDAuMzU0LDAuMSwwLjUzMw0KCQkJbC0xLjY2NiwyLjg4OWMtMC4x%0D%0AMDQsMC4xNzktMC4zMjEsMC4yNDktMC41MDksMC4xNzlMMTguOCwxOS45NTRjLTAuNDI5LDAuMzMz%0D%0ALTAuODk5LDAuNjA4LTEuNDA4LDAuODJsLTAuMzEzLDIuMjA5DQoJCQljLTAuMDMzLDAuMTk1LTAu%0D%0AMjA0LDAuMzUtMC40MTMsMC4zNWgtMy4zMzNjLTAuMjA4LDAtMC4zNzktMC4xNTQtMC40MTMtMC4z%0D%0ANWwtMC4zMTMtMi4yMDljLTAuNTA4LTAuMjEyLTAuOTc5LTAuNDkxLTEuNDA4LTAuODINCgkJCWwt%0D%0AMi4wNzUsMC44MzhjLTAuMTg4LDAuMDc1LTAuNDA0LDAtMC41MDgtMC4xNzlMNi45NSwxNy43MjVj%0D%0ALTAuMTA0LTAuMTg0LTAuMDU5LTAuNDA4LDAuMS0wLjUzM2wxLjc1OS0xLjM3OQ0KCQkJQzguNzc1%0D%0ALDE1LjU0Niw4Ljc1LDE1LjI3NSw4Ljc1LDE1YzAtMC4yNzUsMC4wMjUtMC41NDYsMC4wNTktMC44%0D%0AMTNMNy4wNSwxMi44MDhjLTAuMTU4LTAuMTI5LTAuMjA0LTAuMzU0LTAuMS0wLjUzM2wxLjY2Ny0y%0D%0ALjg4OA0KCQkJYzAuMTA0LTAuMTc5LDAuMzIxLTAuMjUsMC41MDgtMC4xNzlsMi4wNzUsMC44Mzdj%0D%0AMC40MjktMC4zMzMsMC45LTAuNjA4LDEuNDA4LTAuODIxbDAuMzEzLTIuMjA4DQoJCQljMC4wMzMt%0D%0AMC4xOTYsMC4yMDQtMC4zNSwwLjQxMy0wLjM1aDMuMzMzYzAuMjA5LDAsMC4zOCwwLjE1NCwwLjQx%0D%0ANywwLjM1bDAuMzEzLDIuMjA4YzAuNTA5LDAuMjEyLDAuOTc5LDAuNDkyLDEuNDA4LDAuODIxDQoJ%0D%0ACQlsMi4wNzUtMC44MzdjMC4xODgtMC4wNzUsMC40MDQsMCwwLjUwOSwwLjE3OWwxLjY2NywyLjg4%0D%0AOGMwLjEwNCwwLjE4NCwwLjA1OSwwLjQwOC0wLjEwMSwwLjUzM2wtMS43NjMsMS4zNzkNCgkJCUMy%0D%0AMS4yMjUsMTQuNDU0LDIxLjI1LDE0LjcyNSwyMS4yNSwxNXoiLz4NCgk8L2c+DQo8L2c+DQo8ZyBp%0D%0AZD0iQ2FwYV8yIiBkaXNwbGF5PSJub25lIj4NCgk8cGF0aCBkaXNwbGF5PSJpbmxpbmUiIGZpbGw9%0D%0AIiNGRkZGRkYiIGQ9Ik0wLDB2MzBoMzBWMEgweiBNMjAuODMzLDE1LjQxN3Y2LjY2NmgtNC4xNjZ2%0D%0ALTVoLTMuMzMzdjVIOS4xNjd2LTYuNjY2aC0yLjVMMTUsNy45MTcNCgkJbDguMzMzLDcuNUgyMC44%0D%0AMzN6Ii8+DQo8L2c+DQo8ZyBpZD0iQ2FwYV8zIiBkaXNwbGF5PSJub25lIj4NCgk8ZyBkaXNwbGF5%0D%0APSJpbmxpbmUiPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTUsN2MtNC40MSwwLTgsMy41%0D%0AOTEtOCw4YzAsNC40MTEsMy41OSw4LDgsOGM0LjQxLDAsOC0zLjU4OSw4LThDMjMsMTAuNTkxLDE5%0D%0ALjQxLDcsMTUsN3ogTTIwLDE2aC00djRoLTINCgkJCXYtNGgtNHYtMmg0di00aDJ2NGg0VjE2eiIv%0D%0APg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMCwwdjMwaDMwVjBIMHogTTE1LDI1QzkuNDc1%0D%0ALDI1LDUsMjAuNTI1LDUsMTVDNSw5LjQ3NSw5LjQ3NSw1LDE1LDVjNS41MjUsMCwxMCw0LjQ3NSwx%0D%0AMCwxMA0KCQkJQzI1LDIwLjUyNSwyMC41MjUsMjUsMTUsMjV6Ii8+DQoJPC9nPg0KPC9nPg0KPC9z%0D%0Admc+DQo="
        alt="Icon"
        class="menu__icon"
      >
    </div>
    <div>
      <CreationModal id-prop="car">
        <template #header>
          <h2>car modal</h2>
        </template>
        <template #forms>
          <input type="text" v-model="newPost.make">
          <input type="text" v-model="newPost.model">
          <input type="number" v-model="newPost.price">
          <input type="number" v-model="newPost.year">
          <input type="text" v-model="newPost.description">
          <input type="text" v-model="newPost.imgUrl">
        </template>
      </CreationModal>

      <CreationModal id-prop="job">
      </CreationModal>

      <CreationModal id-prop="house">
      </CreationModal>
    </div>
  </nav>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
    })
    return {
      state,
      newPost: computed(() => AppState.newPost)
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}

*,
*::before,
*::after{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-image: linear-gradient(45deg, #A973BC, #FFD1D1 , #FFE3D9);
}
.menu{
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: white;
box-shadow: 0 0 30px rgba(176, 113, 140, 0.35);
}
.menu__bg{
position: relative;
width: 35px;
height: 35px;
overflow: hidden;
background-color: #ddd6d9;
cursor: pointer;
}
.menu__bg:hover::before{
content: '';
position:absolute;
width: 200%;
height: 400%;
left: 0;
top: 0;
background-image: linear-gradient(45deg, #5B2A86, #DC6BAD , #FFE3D9);
animation: bg-1 1s infinite alternate;
}
.menu__bg:hover::after{
content: '';
position:absolute;
left: 0;
top: 0;
width: 15px;
height: 15px;
border-radius: 50%;
filter: blur(2px);
background-color: rgba(221, 214, 217, .7);
animation: bg-2 4s infinite ;
}
.menu__icon{
width: 100%;
height: 100%;
position: relative;
object-fit: contain;
z-index: 1000;
}
.big{
width: 50px;
height: 50px;
}
@keyframes bg-1 {
0%{ top: -300%; }
100%{ top: 0%; }
}
@keyframes bg-2 {
0%{ top: 20%; left: 20%}
25%{ top: 80%; left: 80%;}
50%{ top: 80%; left: 20%;}
75%{ top: 30%; left: 80%;}
}
@keyframes an {
0%{ width: 100%; height: 100%;}
100%{ width: 100%; height: 100%; }
}
</style>
