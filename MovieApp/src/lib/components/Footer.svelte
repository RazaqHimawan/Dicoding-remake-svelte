<script>
function subscribePushMessage() {
  console.log('_subscribePushMessage');
}

function unsubscribePushMessage() {
  console.log('_unsubscribePushMessage');
}
</script>

<div>
  <button
    on:click|stopPropagation={subscribePushMessage}
    id="subscribePushNotification"
    class="btn">Subscribe Push Notification</button
  >
  <button
    on:click|stopPropagation={unsubscribePushMessage}
    id="unsubscribePushNotification"
    class="btn">Unsubscribe Push Notification</button
  >
</div>
<p>
  All data obtained from
  <a
    href="https://themoviedb.org"
    target="_blank"
    rel="noreferrer"
  >
    TheMovieDB
  </a>
</p>

<style>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
p {
  margin-top: 16px;

  text-align: center;
  color: #aaaaaa;
}

p a {
  color: #db0000;
  text-decoration: none;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #db0000;
  border: 1px solid #770000;
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  cursor: pointer;
  transition: 0.15s ease-in-out;
}

.btn:hover {
  background-color: #db0000bb;
}
.btn:active {
  background-color: #db0000dd;
}
.btn:focus-visible {
  outline: 3px solid #db000055;
}

@media screen and (min-width: 650px) {
  div {
    flex-direction: row;
  }
}
</style>
