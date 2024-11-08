<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // createOrFirst permissions
        Permission::createOrFirst(['name' => 'user-list']);
        Permission::createOrFirst(['name' => 'user-create']);
        Permission::createOrFirst(['name' => 'user-edit']);
        Permission::createOrFirst(['name' => 'user-delete']);

        // createOrFirst roles and assign existing permissions
        $role = Role::createOrFirst(['name' => 'Admin']);
        $role->givePermissionTo('user-list');
        $role->givePermissionTo('user-create');
        $role->givePermissionTo('user-edit');
        $role->givePermissionTo('user-delete');
    }
}
