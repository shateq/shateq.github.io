{
  description = "Develop a Hugo blog with Nix";

  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    # nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable-small";
    nixpkgs.url = "github:NixOS/nixpkgs";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }: utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [ hugo ];
        shellHook = ''
          echo "Hugo $(hugo version)"
        '';
      };

      packages.default = pkgs.stdenv.mkDerivation {
        name = "hugo-blog";
        src = self;
        nativeBuildInputs = [ pkgs.hugo ];
        buildPhase = ''
          hugo
        '';

        installPhase = "cp -r public $out";
      };
    }
  );
}
