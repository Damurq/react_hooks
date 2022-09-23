const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase());
      }),
    [characters, search]
  );