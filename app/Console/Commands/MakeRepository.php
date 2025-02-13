<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeRepository extends Command
{
    protected $signature = 'make:repository {name}';
    protected $description = 'Create a new repository class';

    public function handle()
    {
        $name = $this->argument('name');
        $filename = app_path("Repositories/{$name}.php");

        $this->makeDirectory($filename);
        File::put($filename, $this->buildRepositoryClass($name));

        $this->info("Repository created successfully: {$filename}");
    }

    protected function makeDirectory($filename)
    {
        $directory = dirname($filename);

        if (!File::isDirectory($directory)) {
            File::makeDirectory($directory, 0755, true, true);
        }
    }

    protected function buildRepositoryClass($name)
    {
        return "<?php\n\nnamespace App\Repositories;\n\nclass {$name}\n{\n    // Your repository logic goes here\n}\n";
    }
}
