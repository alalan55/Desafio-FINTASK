<template>
  <nav class="nav__bar">
    <div class="logo">
      <Logo text="Desafio fintask" />
    </div>
    <ul class="links">
      <li><NavItem to="/" text="Home" /></li>
      <li><NavItem to="/curtidos" text="Curtidas" /></li>
    </ul>
  </nav>
</template>

<script>
import { NavItem, Logo } from "@/components/atoms";
export default {
  components: {
    NavItem,
    Logo,
  },
};
</script>

<style lang="css" scoped>
.nav__bar {
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--min-padding);
  height: 100%;
}
.links {
  display: flex;
}
.links li {
  list-style: none;
  margin: 0.5rem;
}
</style>