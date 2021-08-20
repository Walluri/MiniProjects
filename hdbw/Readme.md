FRONT END :

1. The pre-loader will send the request for the SCRIPT AND CSS

2. ONLY AFTER you receive the CSS HTML will be rendered element by element.

3. Now <div>Before Script</div> will be rendered as soon as CSS is fetched.

4. Now <script src="./script.js"></script> will be requested for, If it has not yet been requested.
   But preloader has already sent a request.

5. So we wait for the script and then execute it after it is fetched i.e display the alert.

6. Then we display the <div>After Script</div>

7. Note : if you have async in the script <div>After Script</div> will be displayed immediately. With out waiting for the script.
   This we will use if your script does not modify any DOM elements .

We have intentionally put a delay for the script response because - we want to show that with async a script does not block rendering.
But CSS WILL Block rendering.....!
Scripts also will but async will save you.
