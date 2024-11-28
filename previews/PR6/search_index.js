var documenterSearchIndex = {"docs":
[{"location":"license/","page":"License","title":"License","text":"EditURL = \"https://github.com/trixi-framework/ParaViewCatalyst.jl/blob/main/LICENSE.md\"","category":"page"},{"location":"license/#License","page":"License","title":"License","text":"","category":"section"},{"location":"license/","page":"License","title":"License","text":"MIT LicenseCopyright (c) 2022 Jake Bolewski, CaltechPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"reference/#API-reference","page":"API reference","title":"API reference","text":"","category":"section"},{"location":"reference/","page":"API reference","title":"API reference","text":"CurrentModule = ParaViewCatalyst","category":"page"},{"location":"reference/","page":"API reference","title":"API reference","text":"Modules = [ParaViewCatalyst]","category":"page"},{"location":"","page":"Home","title":"Home","text":"EditURL = \"https://github.com/trixi-framework/ParaViewCatalyst.jl/blob/main/README.md\"","category":"page"},{"location":"#ParaViewCatalyst.jl","page":"Home","title":"ParaViewCatalyst.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<!– (Image: Docs-stable) –> (Image: Docs-dev) (Image: Slack) <!– (Image: Build Status) –> <!– (Image: Codecov) –> <!– (Image: Coveralls) –> (Image: License: MIT)","category":"page"},{"location":"","page":"Home","title":"Home","text":"ParaViewCatalyst.jl provides a Julia interface to Catalyst, used for in-situ visualization of simulation data.   The Catalyst library for Julia is provided automatically as a precompiled binary by Catalyst_jll.jl at JuliaBinaryWrappers and Yggdrasil.","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"#Prerequisites","page":"Home","title":"Prerequisites","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Although the Catalyst API is not restricted to ParaView, this package is geared towards the  ParaView implementation of the Catalyst API. As such ParaView needs to be present on the machine you run your simulation on. In particular, a version is required that ships the Catalyst implementation as a library. On Linux you should look for libcatalyst-paraview.so.   Its path has to be set as an environment variable, e.g. by","category":"page"},{"location":"","page":"Home","title":"Home","text":"export CATALYST_IMPLEMENTATION_PATHS=<path_to_libcatalyst-paraview.so>","category":"page"},{"location":"","page":"Home","title":"Home","text":"Alternatively, when using ParaViewCatalyst.jl from your own application, you can use the keyword argument libpath of the function catalyst_initialize.","category":"page"},{"location":"#Testing","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#Catalyst-implementation","page":"Home","title":"Catalyst implementation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Go to the examples folder and start julia using","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia --project=.","category":"page"},{"location":"","page":"Home","title":"Home","text":"In package mode do","category":"page"},{"location":"","page":"Home","title":"Home","text":"(examples) pkg> dev ..\n(examples) pkg> instantiate","category":"page"},{"location":"","page":"Home","title":"Home","text":"then","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> include(\"test_init.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"You should see some information about the Catalyst implementation. In particular, you  should see implementation: \"paraview\".   More verbose output can be enabled by setting the environment variable CATALYST_DEBUG=1.","category":"page"},{"location":"#Paraview","page":"Home","title":"Paraview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Launch ParaView. From the main menu, select \"Catalyst\", then \"Connect\", and accept the default port. Select \"Catalyst\" again and then \"Pause Simulation\". Now launch Julia as done before, and execute","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> include(\"test_execute.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"In ParaView click on the symbol in front of \"Input\", then click on the symbol in front of \"Extract: input\". You should now see a square. In the properties tab under \"Coloring\", select \"testdata\". Now select \"Catalyst\" from the main menu and \"Continue\". The square should change its color every two seconds.","category":"page"},{"location":"#Using-the-interface","page":"Home","title":"Using the interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To use ParaViewCatalyst.jl from your code, you only need catalyst_initialize(), catalyst_execute(node), and catalyst_finalize(). All information is passed through Conduit nodes, which are required to adhere to the Blueprint.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A user-defined ParaView pipeline script can be passed to catalyst_initialize using the keyword argument catalyst_pipeline. By default src/catalyst_pipeline.py is used. This script activates live visualization. The data can also be viewed on a remote machine. In this case options.CatalystLiveURL has to be adjusted to point to the remote machine. Once a pipeline in ParaView has been set up, it can be exported as a script by selecting \"File\" from the main menu and then \"Save Catalyst State\".","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ParaViewCatalyst.jl is used by Trixi.jl.","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ParaViewCatalyst.jl was initiated by Jake Bolewski (@jakebolewski) at https://github.com/CliMA and is now maintained by Benedict Geihe (University of Cologne, Germany).","category":"page"},{"location":"#License-and-contributing","page":"Home","title":"License and contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ParaViewCatalyst.jl is licensed under the MIT license (see License).  Since ParaViewCatalyst.jl is an open-source project, we are very happy to accept contributions from the community. Note that we strive to be a friendly, inclusive open-source community and ask all members of our community to treat each other decently. To get in touch with the developers, join us on Slack or create an issue.","category":"page"}]
}
