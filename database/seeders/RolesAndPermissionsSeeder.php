<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define all permissions grouped by module
        $permissions = [
            // User Management
            'user-list',
            'user-create',
            'user-edit',
            'user-delete',

            // Roles & Permissions Management
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'permission-list',
            'permission-create',
            'permission-edit',
            'permission-delete',

            // Product Management
            'product-list',
            'product-create',
            'product-edit',
            'product-delete',

            // Category Management
            'category-list',
            'category-create',
            'category-edit',
            'category-delete',

            // Brand Management
            'brand-list',
            'brand-create',
            'brand-edit',
            'brand-delete',

            // Blog Management
            'blog-list',
            'blog-create',
            'blog-edit',
            'blog-delete',
            'blogCategory-list',
            'blogCategory-create',
            'blogCategory-edit',
            'blogCategory-delete',

            // Post Management
            'post-list',
            'post-create',
            'post-edit',
            'post-delete',

            // Showroom Management
            'showroom-list',
            'showroom-create',
            'showroom-edit',
            'showroom-delete',

            // Solution Management
            'solution-list',
            'solution-create',
            'solution-edit',
            'solution-delete',

            // Client Management
            'client-list',
            'client-create',
            'client-edit',
            'client-delete',

            // CSR Management
            'csr-list',
            'csr-create',
            'csr-edit',
            'csr-delete',

            // Testimonial Management
            'testimonial-list',
            'testimonial-create',
            'testimonial-edit',
            'testimonial-delete',

            // Event Management
            'event-list',
            'event-create',
            'event-edit',
            'event-delete',

            // Career Management
            'career-list',
            'career-create',
            'career-edit',
            'career-delete',

            // Project Management
            'project-list',
            'project-create',
            'project-edit',
            'project-delete',
        ];

        // Create permissions with web guard
        foreach ($permissions as $permission) {
            Permission::createOrFirst([
                'name' => $permission,
                'guard_name' => 'web'
            ]);
        }

        // Create Admin role
        $adminRole = Role::createOrFirst([
            'name' => 'Admin',
            'guard_name' => 'web'
        ]);

        // Give all permissions to Admin
        $adminRole->syncPermissions(Permission::all());

        // Create Manager role with limited permissions
        $managerRole = Role::createOrFirst([
            'name' => 'Manager',
            'guard_name' => 'web'
        ]);
        $managerRole->givePermissionTo([
            'product-list',
            'product-edit',
            'category-list',
            'category-edit',
            'brand-list',
            'brand-edit',
            'blog-list',
            'blog-edit',
            'client-list',
            'client-edit',
            'testimonial-list',
            'testimonial-edit'
        ]);

        // Create Editor role with limited permissions
        $editorRole = Role::createOrFirst([
            'name' => 'Editor',
            'guard_name' => 'web'
        ]);
        $editorRole->givePermissionTo([
            'blog-list',
            'blog-create',
            'blog-edit',
            'post-list',
            'post-create',
            'post-edit',
            'event-list',
            'event-create',
            'event-edit'
        ]);

        // if exists with same email then update password, otherwise create new user

        $adminUser = User::where('email', 'admin@admin.com')->first();

        if ($adminUser) {
            $adminUser->update([
                'name' => 'Admin',
                'password' => '1234'
            ]);
        } else {
            $adminUser = User::create([
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => '1234',
            ]);
        }

        $adminUser->assignRole($adminRole);
    }
}
