class Gtihub {
  constructor() {
    this.client_id = "43009cd3a143b62d5e5c";
    this.client_secret = "8e674cba56b8b880d83c48e2f951166ff16a4c9c";
    (this.repos_count = 10), (this.repos_sort = "asc");
  }
  async getUser(user) {
    // gelen userla beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // kullanicinin repolarini cekme
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // gelen cevabi jsona cevirme
    const profile = await profileResponse.json();
    // gelen repolari jsona cevirme
    const repos = await repoResponse.json();

    //islenmis veriyi fonksiyonun cagrildigi yere gonderme
    return {
      profile,
      repos,
    };
  }
}

export default Gtihub;
