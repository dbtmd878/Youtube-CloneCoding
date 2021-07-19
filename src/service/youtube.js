class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
  //   search(query) {
  //     return fetch(
  //       `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
  //       this.getRequestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) =>
  //         result.items.map((item) => ({ ...item, id: item.id.videoId }))
  //       );
  //   }
  async mostpopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
  //   mostpopular() {
  //     return fetch(
  //       `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
  //       this.getRequestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) => result.items);
  //   }
}

export default Youtube;
