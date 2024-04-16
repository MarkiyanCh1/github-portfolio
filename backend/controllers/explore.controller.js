export const explorePopularRepos = async (req, res) => {
  const { language } = req.params;

  try {
      const response = await fetch(
      `https://api.github.com/users/MarkiyanCh1/repos?per_page=100`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
