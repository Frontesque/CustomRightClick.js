## What is CustomRightClick.js?
CustomRightClick.js replaces your browser's default context menu (right click menu) on any webpage you add it to.

## How do I add CustomRightClick.js?
Using the code snippet below. No extra file downloads required! Yes, it's actually that simple!

    <script src="https://raw.githubusercontent.com/Frontesque/CustomRightClick.js/master/versions/CustomRightClick-v1.0.min.js"></script>
      <script>
        const options = [
            {
                title: 'Alert',
                function: "alert('Example Entry');"
            },
            {
                title: 'Open Link',
                function: "location.href = 'https://github.com/Frontesque'"
            },
            {
                title: 'Reload',
                function: "location.reload()"
            }
        ]
      </script>
      
      
## How do I configure CustomRightClick.js?
Simple, Change the "options" configuration with your import. If you don't include any options, the context menu will break!

## How do I change the color of the menu?
As of right now, there is no way to change the color of the menu. This is a feature that will be added soon as I have many plans for this simple project.
